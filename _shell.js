/* ============================================================
 * Khoán Sản lượng Cao su — Shell (Sidebar + Header)
 * ============================================================
 * Render khung chung cho mọi trang:
 *  - Header: brand, role switcher, company switcher, user menu
 *  - Sidebar: 3 nhóm Công ty / Đội / Ga (ẩn theo role)
 *  - Tự highlight menu theo activePageId
 * ============================================================ */

(function () {
  'use strict';

  const TPL = 'hud_admin_v2.3/template_html/dist/assets/';

  const PAGES = [
    // CÔNG TY
    { id: 'cty-1-1', group: 'cty', num: '1.1', title: 'Lên kế hoạch khoán',        href: 'cty-1-1-ke-hoach-khoan.html',      section: 'Lập kế hoạch khoán năm', icon: 'bi-journal-text' },
    { id: 'cty-1-2', group: 'cty', num: '1.2', title: 'Lên kế hoạch phấn đấu',     href: 'cty-1-2-ke-hoach-phan-dau.html',   section: 'Lập kế hoạch khoán năm', icon: 'bi-graph-up-arrow' },
    { id: 'cty-2-1', group: 'cty', num: '2.1', title: 'Phân bổ % tháng cho đội',   href: 'cty-2-1-phan-bo-thang.html',       section: 'Điều hành tháng', icon: 'bi-calendar3' },
    { id: 'cty-2-2', group: 'cty', num: '2.2', title: 'Khoán bổ sung',             href: 'cty-2-2-khoan-bo-sung.html',       section: 'Điều hành tháng', icon: 'bi-plus-square' },
    { id: 'cty-2-3', group: 'cty', num: '2.3', title: 'Cân đối sản lượng đội',    href: 'cty-2-3-can-doi-san-luong.html',   section: 'Điều hành tháng', icon: 'bi-arrow-left-right' },
    { id: 'cty-3-1', group: 'cty', num: '3.1', title: 'Theo dõi tiến độ công ty', href: 'cty-3-1-dashboard.html',           section: 'Bảng điều khiển', icon: 'bi-speedometer2' },
    // ĐỘI
    { id: 'doi-1-1', group: 'doi', num: '1.1', title: 'Xem kế hoạch từ Công ty',           href: 'doi-1-1-xem-kh.html',              section: 'Điều hành tháng', icon: 'bi-file-earmark-check' },
    { id: 'doi-1-2', group: 'doi', num: '1.2', title: 'Phân bổ % tháng cho Ga',             href: 'doi-1-2-phan-bo-thang.html',       section: 'Điều hành tháng', icon: 'bi-calendar3' },
    { id: 'doi-2-1', group: 'doi', num: '2.1', title: 'Theo dõi Ga trong Đội',              href: 'doi-2-1-dashboard.html',           section: 'Bảng điều khiển', icon: 'bi-speedometer2' },
    // GA
    { id: 'ga-1-1', group: 'ga', num: '1.1', title: 'Xem kế hoạch từ Đội',                  href: 'ga-1-1-xem-kh.html',               section: 'Điều hành tháng', icon: 'bi-file-earmark-check' },
    { id: 'ga-1-2', group: 'ga', num: '1.2', title: 'Phân bổ % tháng cho công nhân',        href: 'ga-1-2-phan-bo-thang.html',        section: 'Điều hành tháng', icon: 'bi-people' },
    { id: 'ga-2-1', group: 'ga', num: '2.1', title: 'Theo dõi phần cây và công nhân',       href: 'ga-2-1-dashboard.html',            section: 'Bảng điều khiển', icon: 'bi-speedometer2' }
  ];

  const GROUPS = {
    cty: { label: 'Nghiệp vụ cấp Công ty',  icon: 'bi-building-fill',  color: 'text-theme' },
    doi: { label: 'Nghiệp vụ cấp Đội',      icon: 'bi-people-fill',    color: 'text-warning' },
    ga:  { label: 'Nghiệp vụ cấp Ga / Tổ', icon: 'bi-diagram-3-fill', color: 'text-info' }
  };

  const ROLES = [
    { id: 'admin', label: 'Admin hệ thống',     groups: ['cty', 'doi', 'ga'], icon: 'bi-shield-fill-check' },
    { id: 'kt',    label: 'Phòng Kỹ thuật',     groups: ['cty'],              icon: 'bi-person-workspace' },
    { id: 'doi',   label: 'Đội trưởng',         groups: ['doi'],              icon: 'bi-person-badge' },
    { id: 'ga',    label: 'Trưởng Ga / Tổ',    groups: ['ga'],               icon: 'bi-person' }
  ];

  // ======================================================================
  const LS_ROLE = 'ksl.role';
  const LS_COMPANY = 'ksl.company';
  const LS_TEAM = 'ksl.team';     // dùng khi role=doi
  const LS_STATION = 'ksl.station'; // dùng khi role=ga

  function getState() {
    return {
      roleId: localStorage.getItem(LS_ROLE) || 'admin',
      companyId: localStorage.getItem(LS_COMPANY) || 'tanbien',
      teamId: localStorage.getItem(LS_TEAM) || 'tb-d1',
      stationId: localStorage.getItem(LS_STATION) || 'tb-d1-g1'
    };
  }
  function setState(key, value) {
    const map = { role: LS_ROLE, company: LS_COMPANY, team: LS_TEAM, station: LS_STATION };
    localStorage.setItem(map[key], value);
  }

  // ======================================================================
  function renderHeader(state, company, role) {
    const companyOptions = window.KSL_DATA.companies.map(c =>
      `<li><a class="dropdown-item d-flex align-items-center ${c.id === state.companyId ? 'active' : ''}" href="#" data-ksl-company="${c.id}">
        <i class="bi ${c.logoIcon} me-2 text-theme"></i>
        <div class="flex-1">
          <div class="fw-bold">${c.name}</div>
          <div class="small text-inverse text-opacity-50">${c.address} · Mô hình ${c.model}</div>
        </div>
        ${c.id === state.companyId ? '<i class="bi bi-check2 ms-2 text-theme"></i>' : ''}
      </a></li>`).join('');

    const roleOptions = ROLES.map(r =>
      `<li><a class="dropdown-item d-flex align-items-center ${r.id === state.roleId ? 'active' : ''}" href="#" data-ksl-role="${r.id}">
        <i class="bi ${r.icon} me-2 text-theme"></i>
        <div class="flex-1 fw-semibold">${r.label}</div>
        ${r.id === state.roleId ? '<i class="bi bi-check2 ms-2 text-theme"></i>' : ''}
      </a></li>`).join('');

    return `
    <div id="header" class="app-header">
      <div class="desktop-toggler">
        <button type="button" class="menu-toggler" data-toggle-class="app-sidebar-collapsed" data-dismiss-class="app-sidebar-toggled" data-toggle-target=".app">
          <span class="bar"></span><span class="bar"></span><span class="bar"></span>
        </button>
      </div>
      <div class="mobile-toggler">
        <button type="button" class="menu-toggler" data-toggle-class="app-sidebar-mobile-toggled" data-toggle-target=".app">
          <span class="bar"></span><span class="bar"></span><span class="bar"></span>
        </button>
      </div>

      <div class="brand">
        <a href="index.html" class="brand-logo">
          <span class="brand-img"><span class="brand-img-text text-theme">K</span></span>
          <span class="brand-text">KHOÁN SẢN LƯỢNG</span>
        </a>
      </div>

      <div class="menu ms-auto">
        <!-- Company switcher -->
        <div class="menu-item dropdown dropdown-mobile-full">
          <a href="#" data-bs-toggle="dropdown" class="menu-link">
            <div class="menu-icon"><i class="bi ${company.logoIcon} nav-icon text-theme"></i></div>
            <div class="menu-text d-sm-block d-none w-180px text-truncate">${company.name}</div>
          </a>
          <div class="dropdown-menu dropdown-menu-end w-320px mt-1">
            <h6 class="dropdown-header fs-10px mb-1">ĐƠN VỊ HIỆN TẠI</h6>
            <div class="dropdown-divider mt-1"></div>
            <ul class="list-unstyled mb-0">${companyOptions}</ul>
          </div>
        </div>

        <!-- Role switcher -->
        <div class="menu-item dropdown dropdown-mobile-full">
          <a href="#" data-bs-toggle="dropdown" class="menu-link">
            <div class="menu-icon"><i class="bi ${role.icon} nav-icon"></i></div>
            <div class="menu-text d-sm-block d-none w-150px text-truncate">${role.label}</div>
          </a>
          <div class="dropdown-menu dropdown-menu-end w-260px mt-1">
            <h6 class="dropdown-header fs-10px mb-1">VAI TRÒ (BẢN TRÌNH DIỄN)</h6>
            <div class="dropdown-divider mt-1"></div>
            <ul class="list-unstyled mb-0">${roleOptions}</ul>
            <div class="dropdown-divider"></div>
            <div class="px-3 py-2 small text-inverse text-opacity-50">
              Đổi vai trò sẽ ẩn/hiện các nhóm chức năng tương ứng trong sidebar.
            </div>
          </div>
        </div>

        <!-- User -->
        <div class="menu-item dropdown dropdown-mobile-full">
          <a href="#" data-bs-toggle="dropdown" class="menu-link">
            <div class="menu-img online rounded-circle bg-theme d-flex align-items-center justify-content-center" style="width:30px;height:30px;">
              <span class="fw-bold text-inverse">${(role.label[0] || 'U').toUpperCase()}</span>
            </div>
            <div class="menu-text d-sm-block d-none">user@ecotech2a.vn</div>
          </a>
          <div class="dropdown-menu dropdown-menu-end mt-1">
            <a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Hồ sơ</a>
            <a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Cấu hình</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right me-2"></i>Đăng xuất</a>
          </div>
        </div>
      </div>
    </div>`;
  }

  // ======================================================================
  function renderSidebarGroup(groupKey, state, activePageId) {
    const g = GROUPS[groupKey];
    const pages = PAGES.filter(p => p.group === groupKey);
    // Nhóm theo "section"
    const sections = {};
    pages.forEach(p => { (sections[p.section] = sections[p.section] || []).push(p); });

    const sectionHtml = Object.keys(sections).map((secName, i) => {
      const items = sections[secName].map(p => {
        const isActive = p.id === activePageId;
        return `<div class="menu-item ${isActive ? 'active' : ''}">
          <a href="${p.href}" class="menu-link">
            <span class="menu-text"><span class="text-inverse text-opacity-50 small me-1">${p.num}</span>${p.title}</span>
          </a>
        </div>`;
      }).join('');
      // Sub-section: 1 dropdown per section
      const hasActive = sections[secName].some(p => p.id === activePageId);
      const sectionIcon = sections[secName][0].icon || 'bi-dot';
      return `<div class="menu-item has-sub ${hasActive ? 'active' : ''}">
        <a href="#" class="menu-link">
          <span class="menu-icon"><i class="bi ${sectionIcon}"></i></span>
          <span class="menu-text">${i + 1}. ${secName}</span>
          <span class="menu-caret"><b class="caret"></b></span>
        </a>
        <div class="menu-submenu">${items}</div>
      </div>`;
    }).join('');

    return `
      <div class="menu-header mt-2">
        <span class="${g.color}">${g.label}</span>
      </div>
      ${sectionHtml}
    `;
  }

  function renderSidebar(state, role, activePageId) {
    const groupsHtml = role.groups.map(g => renderSidebarGroup(g, state, activePageId)).join('');
    return `
    <div id="sidebar" class="app-sidebar">
      <div class="app-sidebar-content" data-scrollbar="true" data-height="100%">
        <div class="menu">
          ${groupsHtml}
        </div>
        <div class="p-3 px-4 mt-auto small text-inverse text-opacity-50">
          <div class="fw-bold mb-1">Ngày trình diễn: ${window.KSL_DATA.currentDate}</div>
          <div>Bản phác thảo giao diện · Ecotech 2A · 2026</div>
        </div>
      </div>
    </div>
    <button class="app-sidebar-mobile-backdrop" data-toggle-target=".app" data-toggle-class="app-sidebar-mobile-toggled"></button>
    `;
  }

  // ======================================================================
  function renderScopeBar(state, company, role, scope) {
    // Thanh ngữ cảnh hiển thị ngay đầu content: Công ty / Đội / Ga đang chọn
    const compLabel = `<span class="me-2"><i class="bi ${company.logoIcon} text-theme me-1"></i><strong>${company.name}</strong></span>`;
    const modelLabel = `<span class="badge bg-theme bg-opacity-15 text-theme fw-bold me-2">Mô hình ${company.model}</span>`;
    const roleLabel = `<span class="badge bg-inverse bg-opacity-10 text-inverse me-2"><i class="bi ${role.icon} me-1"></i>${role.label}</span>`;

    let extra = '';
    if (scope === 'doi' || role.id === 'doi') {
      const teams = company.teams.map(t => `<option value="${t.id}" ${state.teamId === t.id ? 'selected' : ''}>${t.name}</option>`).join('');
      extra = `<span class="ms-2 me-2 text-inverse text-opacity-50">·</span>
        <span class="me-2 small text-inverse text-opacity-50">Đội:</span>
        <select class="form-select form-select-sm w-auto" id="scope-team-select">${teams}</select>`;
    }
    if (scope === 'ga' || role.id === 'ga') {
      const stationsFlat = window.KSL_DATA.flatStations(company);
      if (stationsFlat.length) {
        const opts = stationsFlat.map(s => `<option value="${s.id}" ${state.stationId === s.id ? 'selected' : ''}>${s.teamName} · ${s.name}</option>`).join('');
        extra += `<span class="ms-2 me-2 text-inverse text-opacity-50">·</span>
          <span class="me-2 small text-inverse text-opacity-50">Ga/Tổ:</span>
          <select class="form-select form-select-sm w-auto" id="scope-station-select">${opts}</select>`;
      } else {
        extra += `<span class="ms-2 small text-warning"><i class="bi bi-info-circle me-1"></i>Công ty áp dụng mô hình 2 — không qua cấp Ga</span>`;
      }
    }

    return `
    <div class="ksl-scope-bar d-flex flex-wrap align-items-center p-2 px-3 mb-3 rounded-3" style="background:rgba(var(--bs-inverse-rgb),0.04);border:1px solid rgba(var(--bs-inverse-rgb),0.08);">
      ${compLabel}${modelLabel}${roleLabel}${extra}
    </div>`;
  }

  // ======================================================================
  // Public API
  window.Shell = {
    PAGES, GROUPS, ROLES,
    getState,

    // Gọi ở đầu <body> của mỗi trang
    render(opts) {
      opts = opts || {};
      const state = getState();
      const company = window.KSL_DATA.getCompany(state.companyId);
      let role = ROLES.find(r => r.id === state.roleId) || ROLES[0];

      // Ràng buộc: nếu activePageId thuộc group mà role không có quyền, nâng tạm role = admin
      const page = PAGES.find(p => p.id === opts.activePageId);
      if (page && !role.groups.includes(page.group) && role.id !== 'admin') {
        role = ROLES[0];
        setState('role', 'admin');
      }

      // Inject header & sidebar vào đầu #app
      const app = document.getElementById('app');
      if (!app) return;

      const headerHtml = renderHeader(state, company, role);
      const sidebarHtml = renderSidebar(state, role, opts.activePageId || 'home');

      // Tạo wrapper div và prepend
      const wrapper = document.createElement('div');
      wrapper.innerHTML = headerHtml + sidebarHtml;
      while (wrapper.firstChild) {
        app.insertBefore(wrapper.firstChild, app.firstChild);
      }

      // Chèn scope bar vào đầu #content (nếu có)
      const content = document.getElementById('content');
      if (content && opts.scope !== 'none') {
        const sb = document.createElement('div');
        sb.innerHTML = renderScopeBar(state, company, role, opts.scope);
        content.insertBefore(sb.firstChild, content.firstChild);
      }

      // Sự kiện đổi role / company
      document.querySelectorAll('[data-ksl-role]').forEach(el => {
        el.addEventListener('click', e => {
          e.preventDefault();
          setState('role', el.getAttribute('data-ksl-role'));
          // khi đổi role, về trang đầu nhóm tương ứng
          const newRole = ROLES.find(r => r.id === el.getAttribute('data-ksl-role'));
          const firstGroup = newRole.groups[0];
          const target = PAGES.find(p => p.group === firstGroup);
          window.location.href = target ? target.href : 'index.html';
        });
      });
      document.querySelectorAll('[data-ksl-company]').forEach(el => {
        el.addEventListener('click', e => {
          e.preventDefault();
          setState('company', el.getAttribute('data-ksl-company'));
          // Reset team/station lựa chọn
          const newCompany = window.KSL_DATA.getCompany(el.getAttribute('data-ksl-company'));
          if (newCompany.teams[0]) setState('team', newCompany.teams[0].id);
          const firstSt = window.KSL_DATA.flatStations(newCompany)[0];
          if (firstSt) setState('station', firstSt.id);
          window.location.reload();
        });
      });
      const teamSel = document.getElementById('scope-team-select');
      if (teamSel) teamSel.addEventListener('change', () => {
        setState('team', teamSel.value);
        window.location.reload();
      });
      const stSel = document.getElementById('scope-station-select');
      if (stSel) stSel.addEventListener('change', () => {
        setState('station', stSel.value);
        window.location.reload();
      });

      return { state, company, role };
    }
  };
})();
