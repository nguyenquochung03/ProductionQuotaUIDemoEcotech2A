/* ============================================================
 * Khoán Sản lượng Cao su — Dữ liệu giả lập cho bản trình diễn giao diện
 * ============================================================
 * Dữ liệu mẫu cho 3 đơn vị khách (Tân Biên, Lộc Ninh, Tây Ninh).
 * Cấu trúc phản ánh tài liệu phân tích mới nhất + Timeline.
 * Giá trị con số là giả lập, không đại diện số liệu thật.
 * ============================================================ */

(function () {
  'use strict';

  const MONTHS_VN = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];
  const MONTHS_SHORT = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

  // ======= CÔNG TY 1: CAO SU TÂN BIÊN (Mô hình 1: qua đủ Ga) =======
  const tanbien = {
    id: 'tanbien',
    name: 'Cao su Tân Biên',
    code: 'TANBIEN',
    model: '1',
    address: 'Tây Ninh',
    logoIcon: 'bi-tree-fill',

    teams: [
      {
        id: 'tb-d1', name: 'Đội 1 — Tân Hiệp',
        stations: [
          {
            id: 'tb-d1-g1', name: 'Tổ 1',
            lots: [
              { id: 'tb-lo82', name: 'Lô 82', year: 2012, area: 25.3, trees: 12450, seedling: 'PB260',
                parts: 28 },
              { id: 'tb-lo84', name: 'Lô 84', year: 2013, area: 22.7, trees: 11200, seedling: 'PB260',
                parts: 25 },
              { id: 'tb-lo86', name: 'Lô 86', year: 2015, area: 28.1, trees: 13800, seedling: 'RRIV4',
                parts: 30 }
            ]
          },
          {
            id: 'tb-d1-g2', name: 'Tổ 2',
            lots: [
              { id: 'tb-lo116', name: 'Lô 116', year: 2010, area: 24.5, trees: 11800, seedling: 'PB260',
                parts: 26 },
              { id: 'tb-lo118', name: 'Lô 118', year: 2011, area: 26.2, trees: 12600, seedling: 'PB260',
                parts: 28 }
            ]
          }
        ]
      },
      {
        id: 'tb-d2', name: 'Đội 2 — Tân Hội',
        stations: [
          {
            id: 'tb-d2-g1', name: 'Tổ 1',
            lots: [
              { id: 'tb-lo236', name: 'Lô 236', year: 2014, area: 30.5, trees: 14800, seedling: 'RRIV4',
                parts: 32 },
              { id: 'tb-lo238', name: 'Lô 238', year: 2014, area: 29.8, trees: 14500, seedling: 'RRIV4',
                parts: 32 }
            ]
          },
          {
            id: 'tb-d2-g2', name: 'Tổ 2',
            lots: [
              { id: 'tb-lo240', name: 'Lô 240', year: 2016, area: 27.3, trees: 13400, seedling: 'RRIV4',
                parts: 29 },
              { id: 'tb-lo242', name: 'Lô 242', year: 2017, area: 28.9, trees: 14100, seedling: 'RRIV4',
                parts: 31 }
            ]
          },
          {
            id: 'tb-d2-g3', name: 'Tổ 3',
            lots: [
              { id: 'tb-lo244', name: 'Lô 244', year: 2018, area: 26.7, trees: 13000, seedling: 'PB312',
                parts: 28 }
            ]
          }
        ]
      },
      {
        id: 'tb-d3', name: 'Đội 3 — Tân Khai',
        stations: [
          {
            id: 'tb-d3-g1', name: 'Tổ 1',
            lots: [
              { id: 'tb-lo318', name: 'Lô 318', year: 2013, area: 23.8, trees: 11500, seedling: 'PB260',
                parts: 25 },
              { id: 'tb-lo320', name: 'Lô 320', year: 2014, area: 25.1, trees: 12200, seedling: 'PB260',
                parts: 27 }
            ]
          },
          {
            id: 'tb-d3-g2', name: 'Tổ 2',
            lots: [
              { id: 'tb-lo322', name: 'Lô 322', year: 2016, area: 24.4, trees: 11900, seedling: 'RRIV4',
                parts: 26 }
            ]
          }
        ]
      }
    ],

    // Kế hoạch khoán năm
    plans: {
      2024: { status: 'locked', total: 11800000, approvedBy: 'Nguyễn Văn Minh (Phòng Kỹ thuật)', approvedAt: '2023-11-28' },
      2025: { status: 'locked', total: 12300000, approvedBy: 'Nguyễn Văn Minh (Phòng Kỹ thuật)', approvedAt: '2024-11-25' },
      2026: { status: 'locked', total: 12850000, approvedBy: 'Nguyễn Văn Minh (Phòng Kỹ thuật)', approvedAt: '2025-11-20' },
      2027: { status: 'draft', total: 13420000, approvedBy: null, approvedAt: null, createdAt: '2026-04-18' }
    },

    // Kế hoạch phấn đấu
    strivePlans: {
      2024: { status: 'locked', total: 590000, percent: 5, approvedAt: '2023-12-02' },
      2025: { status: 'locked', total: 738000, percent: 6, approvedAt: '2024-12-05' },
      2026: { status: 'locked', total: 1028000, percent: 8, approvedAt: '2025-12-01' },
      2027: { status: 'not_started' }
    },

    // Số version phân bổ % tháng (thể hiện cơ chế lock + version)
    // percents[i] = % kế hoạch tháng i+1, tính trên KẾ HOẠCH HIỆU LỰC (đã gộp bổ sung), tổng = 100
    monthlyVersions: {
      2026: [
        { v: 1, createdAt: '2025-12-01', createdBy: 'Nguyễn Văn Minh', note: 'Phân bổ ban đầu',
          percents: [6, 0, 0, 8, 10, 11, 11, 12, 12, 11, 10, 9] },
        { v: 2, createdAt: '2026-02-14', createdBy: 'Nguyễn Văn Minh', note: 'Điều chỉnh % do tháng 1 hụt 12% — dồn sang Tháng 5 đến Tháng 11',
          percents: [6, 0, 0, 8, 10, 11, 11, 12, 12, 11, 10, 9] },
        { v: 3, createdAt: '2026-04-10', createdBy: 'Nguyễn Văn Minh', note: 'Thu hẹp % tất cả tháng theo tỷ lệ khoán tăng (×base/hiệu lực) — chờ phân bổ phần bổ sung vào các tháng còn lại',
          percents: [5.7, 0, 0, 7.6, 9.5, 10.4, 10.4, 11.4, 11.4, 10.4, 9.5, 8.5] }
      ]
    },

    // Khoán bổ sung năm 2026
    supplementary: [
      { id: 'bs1', code: 'QuyetDinh-TapDoan/2026/042', date: '2026-03-15', kg: 450000, reason: 'Tập đoàn Công nghiệp Cao su Việt Nam giao thêm theo tình hình giá mủ Quý 1', createdBy: 'Nguyễn Văn Minh' },
      { id: 'bs2', code: 'QuyetDinh-TapDoan/2026/088', date: '2026-04-05', kg: 280000, reason: 'Bổ sung đợt 2 sau đánh giá vườn cây', createdBy: 'Nguyễn Văn Minh' }
    ],

    // Cân đối sản lượng liên đội (2025 - cuối năm)
    balances: [
      { id: 'bl1', year: 2025, date: '2025-12-20', fromTeam: 'Đội 1 — Tân Hiệp', toTeam: 'Đội 3 — Tân Khai', kg: 85000, reason: 'Đội 3 hụt do mùa khô kéo dài, Đội 1 dư 8%', approvedBy: 'Giám đốc Nguyễn Hồng Phước' },
      { id: 'bl2', year: 2025, date: '2025-12-22', fromTeam: 'Đội 2 — Tân Hội', toTeam: 'Đội 3 — Tân Khai', kg: 42000, reason: 'Bù thêm cho Đội 3 đạt 100%', approvedBy: 'Giám đốc Nguyễn Hồng Phước' }
    ]
  };

  // ======= CÔNG TY 2: CAO SU LỘC NINH (Mô hình 1) =======
  const locninh = {
    id: 'locninh',
    name: 'Cao su Lộc Ninh',
    code: 'LOCNINH',
    model: '1',
    address: 'Bình Phước',
    logoIcon: 'bi-tree',

    teams: [
      {
        id: 'ln-nt1', name: 'Nông trường 1',
        stations: [
          { id: 'ln-nt1-g1', name: 'Tổ 1',
            lots: [
              { id: 'ln-lo101', name: 'Lô 101', year: 2011, area: 28.0, trees: 13800, seedling: 'GT1', parts: 30 },
              { id: 'ln-lo102', name: 'Lô 102', year: 2012, area: 26.5, trees: 13100, seedling: 'GT1', parts: 28 }
            ]
          },
          { id: 'ln-nt1-g2', name: 'Tổ 2',
            lots: [
              { id: 'ln-lo105', name: 'Lô 105', year: 2014, area: 29.2, trees: 14400, seedling: 'PB260', parts: 31 }
            ]
          }
        ]
      },
      {
        id: 'ln-nt2', name: 'Nông trường 2',
        stations: [
          { id: 'ln-nt2-g1', name: 'Tổ 1',
            lots: [
              { id: 'ln-lo205', name: 'Lô 205', year: 2013, area: 27.4, trees: 13500, seedling: 'PB260', parts: 29 },
              { id: 'ln-lo207', name: 'Lô 207', year: 2015, area: 28.8, trees: 14100, seedling: 'RRIV4', parts: 31 }
            ]
          }
        ]
      }
    ],
    plans: {
      2025: { status: 'locked', total: 8500000, approvedBy: 'Trần Quốc Bảo', approvedAt: '2024-11-22' },
      2026: { status: 'locked', total: 8920000, approvedBy: 'Trần Quốc Bảo', approvedAt: '2025-11-18' },
      2027: { status: 'not_started' }
    },
    strivePlans: {
      2025: { status: 'locked', total: 425000, percent: 5, approvedAt: '2024-12-01' },
      2026: { status: 'locked', total: 535200, percent: 6, approvedAt: '2025-11-28' },
      2027: { status: 'not_started' }
    },
    monthlyVersions: {
      2026: [
        { v: 1, createdAt: '2025-11-25', createdBy: 'Trần Quốc Bảo', note: 'Phân bổ ban đầu',
          percents: [6, 0, 0, 8, 10, 11, 11, 12, 12, 11, 10, 9] },
        { v: 2, createdAt: '2026-03-08', createdBy: 'Trần Quốc Bảo', note: 'Điều chỉnh % các tháng sau do Tháng 1, Tháng 2 mưa trái mùa — dồn bù sang Tháng 6-12',
          percents: [6, 0, 0, 8, 10, 12, 12, 13, 12, 11, 10, 6] }
      ]
    },
    supplementary: [
      { id: 'bs1', code: 'QuyetDinh-TapDoan/2026/042', date: '2026-03-15', kg: 320000, reason: 'Tập đoàn Công nghiệp Cao su Việt Nam giao thêm Quý 1', createdBy: 'Trần Quốc Bảo' }
    ],
    balances: [
      { id: 'bl1', year: 2025, date: '2025-12-18', fromTeam: 'Nông trường 1', toTeam: 'Nông trường 2', kg: 58000, reason: 'Nông trường 2 hụt do dịch bệnh thân cây', approvedBy: 'Giám đốc Lê Minh Tâm' }
    ]
  };

  // ======= CÔNG TY 3: CAO SU TÂY NINH (Mô hình 2: bỏ qua Ga) =======
  const tayninh = {
    id: 'tayninh',
    name: 'Cao su Tây Ninh',
    code: 'TAYNINH',
    model: '2',
    address: 'Tây Ninh',
    logoIcon: 'bi-tree-fill',

    teams: [
      {
        id: 'tn-d1', name: 'Đội 1',
        stations: [],
        lots: [
          { id: 'tn-lo55', name: 'Lô 55', year: 2013, area: 24.6, trees: 12100, seedling: 'PB260', parts: 26 },
          { id: 'tn-lo56', name: 'Lô 56', year: 2014, area: 25.2, trees: 12400, seedling: 'PB260', parts: 27 },
          { id: 'tn-lo57', name: 'Lô 57', year: 2016, area: 26.1, trees: 12800, seedling: 'RRIV4', parts: 28 }
        ]
      },
      {
        id: 'tn-d2', name: 'Đội 2',
        stations: [],
        lots: [
          { id: 'tn-lo88', name: 'Lô 88', year: 2012, area: 23.4, trees: 11500, seedling: 'GT1', parts: 25 },
          { id: 'tn-lo89', name: 'Lô 89', year: 2015, area: 26.8, trees: 13100, seedling: 'RRIV4', parts: 28 }
        ]
      }
    ],
    plans: {
      2025: { status: 'locked', total: 6200000, approvedBy: 'Phạm Thành Long', approvedAt: '2024-11-20' },
      2026: { status: 'locked', total: 6480000, approvedBy: 'Phạm Thành Long', approvedAt: '2025-11-22' },
      2027: { status: 'not_started' }
    },
    strivePlans: {
      2025: { status: 'locked', total: 310000, percent: 5, approvedAt: '2024-12-05' },
      2026: { status: 'locked', total: 388800, percent: 6, approvedAt: '2025-12-02' },
      2027: { status: 'not_started' }
    },
    monthlyVersions: {
      2026: [
        { v: 1, createdAt: '2025-11-28', createdBy: 'Phạm Thành Long', note: 'Phân bổ ban đầu',
          percents: [6, 0, 0, 8, 10, 11, 11, 12, 12, 11, 10, 9] }
      ]
    },
    supplementary: [],
    balances: []
  };

  // ======= Hàm helper =======

  // Tỷ lệ % mẫu cho 12 tháng (tổng = 100). Tháng 2, Tháng 3 = 0 (mùa rụng lá).
  const DEFAULT_MONTH_PERCENT = [6, 0, 0, 8, 10, 11, 11, 12, 12, 11, 10, 9]; // tổng 100

  // Thực hiện lũy kế giả lập theo tháng (để tạo dashboard)
  function seedActual(planTotal, percent, achievedPctTotal) {
    const today = new Date('2026-04-24');
    const currentMonth = today.getMonth() + 1; // 4
    const result = [];
    for (let m = 1; m <= 12; m++) {
      const plan = Math.round(planTotal * percent[m - 1] / 100);
      if (m < currentMonth) {
        // tháng đã qua: thực hiện giả lập
        const achievedRate = (0.92 + Math.random() * 0.15); // 92-107%
        result.push({ month: m, plan, actual: Math.round(plan * achievedRate) });
      } else if (m === currentMonth) {
        // tháng hiện tại: thực hiện tới ngày hiện tại (~80% tháng)
        const achievedRate = (0.60 + Math.random() * 0.25);
        result.push({ month: m, plan, actual: Math.round(plan * achievedRate) });
      } else {
        // tháng tương lai: chưa có thực hiện
        result.push({ month: m, plan, actual: 0 });
      }
    }
    return result;
  }

  window.KSL_DATA = {
    currentDate: '2026-04-24',
    currentMonth: 4,
    currentYear: 2026,
    nextYear: 2027,
    MONTHS_VN,
    MONTHS_SHORT,
    DEFAULT_MONTH_PERCENT,

    companies: [tanbien, locninh, tayninh],

    // Giúp load theo id
    getCompany(id) {
      return this.companies.find(c => c.id === id) || this.companies[0];
    },

    // Tạo lịch sử 3 năm giả lập cho 1 lô
    mockLotHistory(lotId) {
      const seed = lotId.length * 7 + 100;
      return [
        { year: 2023, yield: 42000 + (seed * 31) % 8000, yieldPerHa: 1680, yieldPerTree: 3.4 },
        { year: 2024, yield: 44000 + (seed * 37) % 8000, yieldPerHa: 1760, yieldPerTree: 3.5 },
        { year: 2025, yield: 45500 + (seed * 41) % 8000, yieldPerHa: 1810, yieldPerTree: 3.6 }
      ];
    },

    // Tạo danh sách lô phẳng cho 1 công ty
    flatLots(company) {
      const out = [];
      company.teams.forEach(team => {
        if (company.model === '2') {
          (team.lots || []).forEach(lot => out.push({ ...lot, teamId: team.id, teamName: team.name, stationId: null, stationName: null }));
        } else {
          (team.stations || []).forEach(st => {
            (st.lots || []).forEach(lot => out.push({ ...lot, teamId: team.id, teamName: team.name, stationId: st.id, stationName: st.name }));
          });
        }
      });
      return out;
    },

    // Danh sách Ga phẳng
    flatStations(company) {
      const out = [];
      company.teams.forEach(team => {
        (team.stations || []).forEach(st => out.push({ ...st, teamId: team.id, teamName: team.name }));
      });
      return out;
    },

    // Sản lượng giả lập theo tháng cho 1 cấp
    mockMonthlyActual(planTotal, percentArr) {
      return seedActual(planTotal, percentArr || DEFAULT_MONTH_PERCENT);
    },

    // Format số kg có dấu chấm ngăn cách nghìn (VN)
    fmtNum(n) {
      if (n === null || n === undefined || isNaN(n)) return '—';
      return new Intl.NumberFormat('vi-VN').format(Math.round(n));
    },
    fmtKg(n) { return this.fmtNum(n) + ' kg'; },
    fmtTon(n) { return this.fmtNum((n || 0) / 1000) + ' tấn'; },
    fmtPct(n, d) {
      if (n === null || n === undefined || isNaN(n)) return '—';
      return n.toFixed(d == null ? 1 : d) + '%';
    }
  };
})();
