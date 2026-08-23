const ICONS = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>',
  expand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>',
  folderPlus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path><path d="M12 10v6"></path><path d="M9 13h6"></path></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>',
  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 8-6 4 6 4V8Z"></path><rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect></svg>',
  type: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" x2="15" y1="20" y2="20"></line><line x1="12" x2="12" y1="4" y2="20"></line></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path></svg>'
};

const URL_PARAMS = new URLSearchParams(window.location.search);
const VIEW_MODE = URL_PARAMS.has('view');
const DEFAULT_PASSWORD = '123456';
let editUnlocked = false;

const TYPE_LABELS = {
  page: '页面版式',
  image: '视觉素材',
  video: '视频案例',
  pdf: 'PDF 文档',
  font: '字体',
  color: '配色'
};

const TYPE_BADGES = {
  page: 'var(--cobalt)',
  image: 'var(--accent)',
  video: 'var(--plum)',
  pdf: 'var(--gold)',
  font: 'var(--gold)',
  color: 'var(--sage)'
};

const FOLDER_ORDER = ['全部素材', '我的收藏', '客户案例', '页面版式', '视觉素材', '视频案例', 'PDF 文档', '字体样本', '配色研究'];
const TYPE_TABS = [
  { value: 'all', label: '全部' },
  { value: 'page', label: '页面版式' },
  { value: 'image', label: '视觉素材' },
  { value: 'video', label: '视频案例' },
  { value: 'pdf', label: 'PDF' },
  { value: 'font', label: '字体' },
  { value: 'color', label: '配色' }
];

const seedAssets = [
  {
    id: 'case-a-before', title: '案例 A · 原始版', type: 'page', folder: '客户案例',
    tags: ['16:9', '客户 A', '原始'], src: 'assets/cases/case-a-before.jpg', ratio: '16 / 9',
    dimensions: '4000 × 2250', added: '2026-06-12', favorite: true,
    notes: '改造前的原始页面，版面重心偏低，信息层级不够清楚。'
  },
  {
    id: 'case-a-after', title: '案例 A · 重构版', type: 'page', folder: '客户案例',
    tags: ['16:9', '客户 A', '重构'], src: 'assets/cases/case-a-after.jpg', ratio: '4 / 1',
    dimensions: '4000 × 1000', added: '2026-06-12', favorite: true,
    notes: '重构后标题与正文分区明确，横向节奏更完整。'
  },
  {
    id: 'case-b-before', title: '案例 B · 原始版', type: 'page', folder: '客户案例',
    tags: ['宽幅', '客户 B', '原始'], src: 'assets/cases/case-b-before.jpg', ratio: '4000 / 970',
    dimensions: '4000 × 970', added: '2026-06-18', favorite: false,
    notes: '宽幅页面，视觉元素分布松散，缺少统一的栅格。'
  },
  {
    id: 'case-b-after', title: '案例 B · 重构版', type: 'page', folder: '客户案例',
    tags: ['16:9', '客户 B', '重构'], src: 'assets/cases/case-b-after.jpg', ratio: '16 / 9',
    dimensions: '4000 × 2250', added: '2026-06-18', favorite: true,
    notes: '用更紧凑的栅格组织内容，重点信息上移。'
  },
  {
    id: 'case-c-01-before', title: '案例 C · 01 页 · 原始', type: 'page', folder: '客户案例',
    tags: ['封面', '原始'], src: 'assets/cases/case-c-01-before.jpg', ratio: '40 / 9',
    dimensions: '4000 × 900', added: '2026-06-25', favorite: false,
    notes: '案例三起始页的原始截图，横向延展但信息较少。'
  },
  {
    id: 'case-c-02-before', title: '案例 C · 02 页 · 原始', type: 'page', folder: '客户案例',
    tags: ['目录', '原始'], src: 'assets/cases/case-c-02-before.jpg', ratio: '40 / 9',
    dimensions: '4000 × 900', added: '2026-06-25', favorite: false,
    notes: '目录页原始版本，条目之间缺少节奏。'
  },
  {
    id: 'case-c-05-before', title: '案例 C · 05 页 · 原始', type: 'page', folder: '客户案例',
    tags: ['数据页', '原始'], src: 'assets/cases/case-c-05-before.jpg', ratio: '40 / 9',
    dimensions: '4000 × 900', added: '2026-06-25', favorite: false,
    notes: '数据页原始截图，重点数字不够突出。'
  },
  {
    id: 'case-c-01-after', title: '案例 C · 01 页 · 重构', type: 'page', folder: '客户案例',
    tags: ['封面', '重构'], src: 'assets/cases/case-c-01-after.jpg', ratio: '16 / 9',
    dimensions: '4000 × 2250', added: '2026-06-26', favorite: true,
    notes: '重构后的封面页，主标题更有分量，留白也更稳。'
  },
  {
    id: 'case-c-05-after', title: '案例 C · 05 页 · 重构', type: 'page', folder: '客户案例',
    tags: ['数据页', '重构'], src: 'assets/cases/case-c-05-after.jpg', ratio: '16 / 9',
    dimensions: '4000 × 2250', added: '2026-06-26', favorite: true,
    notes: '重构后的数据页，数字和图表层级更清楚。'
  },
  {
    id: 'data-page', title: '数据页 · 参考', type: 'page', folder: '页面版式',
    tags: ['数据页', '参考'], src: 'assets/cases/data-page-after.jpg', ratio: '16 / 9',
    dimensions: '4000 × 2250', added: '2026-07-02', favorite: false,
    notes: '信息密度较高的数据页参考，适合学习信息分区。'
  },
  {
    id: 'chart-page', title: '图表页 · 参考', type: 'page', folder: '页面版式',
    tags: ['图表', '参考'], src: 'assets/cases/chart-page-after.jpg', ratio: '16 / 9',
    dimensions: '4000 × 2250', added: '2026-07-02', favorite: false,
    notes: '图表与文字混排的参考页面，强调数据和结论的配合。'
  },
  {
    id: 'case-page', title: '案例页 · 参考', type: 'page', folder: '页面版式',
    tags: ['案例', '参考'], src: 'assets/cases/case-page-after.jpg', ratio: '16 / 9',
    dimensions: '4000 × 2250', added: '2026-07-02', favorite: false,
    notes: '客户案例展示页参考，适合观察图片与文字的对齐方式。'
  },
  {
    id: 'business-photo', title: '商务场景图', type: 'image', folder: '视觉素材',
    tags: ['商务', '人物'], src: 'assets/cases/business-photo.jpg', ratio: '25 / 18',
    dimensions: '1000 × 720', added: '2026-07-08', favorite: false,
    notes: '适合做 PPT 配图的商务场景素材。'
  },
  {
    id: 'poster-photo', title: '海报视觉图', type: 'image', folder: '视觉素材',
    tags: ['海报', '摄影'], src: 'assets/cases/poster-photo.jpg', ratio: '16 / 9',
    dimensions: '1600 × 900', added: '2026-07-08', favorite: true,
    notes: '画面主体明确，适合当封面或视觉背景。'
  },
  {
    id: 'tech-panel', title: '科技面板图', type: 'image', folder: '视觉素材',
    tags: ['科技', '界面'], src: 'assets/cases/tech-panel.jpg', ratio: '20 / 13',
    dimensions: '1200 × 780', added: '2026-07-08', favorite: false,
    notes: '科技感较强的界面面板参考。'
  },
  {
    id: 'font-title', title: '思源宋体 · 标题', type: 'font', folder: '字体样本',
    tags: ['标题', '宋体'], added: '2026-07-15', favorite: true,
    dimensions: '可变字重', ratio: '4 / 3',
    spec: { family: '"MiSans"', weight: 700, glyph: '灵', sample: '设计灵感，从抽屉开始', meta: '标题 · 700' },
    notes: '标题场景常用字体，适合与正文无衬线形成对比。'
  },
  {
    id: 'font-body', title: '苹方 · 正文', type: 'font', folder: '字体样本',
    tags: ['正文', '无衬线'], added: '2026-07-15', favorite: false,
    dimensions: '常规字重', ratio: '4 / 3',
    spec: { family: '"MiSans"', weight: 400, glyph: '永', sample: '内容清楚，阅读顺滑', meta: '正文 · 400' },
    notes: '正文场景常用字体，笔画干净，适合长文阅读。'
  },
  {
    id: 'font-mono', title: '等宽字体 · 数据', type: 'font', folder: '字体样本',
    tags: ['数字', '等宽'], added: '2026-07-15', favorite: false,
    dimensions: '等宽字距', ratio: '4 / 3',
    spec: { family: '"MiSans"', weight: 500, glyph: '7', sample: 'Asset_01 / 2026.08', meta: '数据 · 500' },
    notes: '等宽字体适合放序号、尺寸和代码类信息。'
  },
  {
    id: 'font-number', title: 'DIN · 数字', type: 'font', folder: '字体样本',
    tags: ['数字', '强调'], added: '2026-07-15', favorite: false,
    dimensions: '窄体数字', ratio: '4 / 3',
    spec: { family: '"MiSans"', weight: 600, glyph: '8', sample: '0 1 2 3 4 5', meta: '数字 · 600' },
    notes: '数字场景常用字体，适合金额、日期和统计数字。'
  },
  {
    id: 'color-signal', title: '信号橙 · 视觉强调', type: 'color', folder: '配色研究',
    tags: ['强调色', '暖色'], added: '2026-07-20', favorite: true,
    dimensions: '4 色组合', ratio: '4 / 3',
    swatches: [['#E2552F', '信号橙'], ['#FF7A45', '亮橙'], ['#F4D8CC', '浅橙'], ['#1B1C1F', '墨黑']],
    notes: '以信号橙作为主强调色，适合封面和关键按钮。'
  },
  {
    id: 'color-cool', title: '海雾蓝 · 信息背景', type: 'color', folder: '配色研究',
    tags: ['背景色', '冷色'], added: '2026-07-20', favorite: false,
    dimensions: '4 色组合', ratio: '4 / 3',
    swatches: [['#EAF1F5', '海雾'], ['#A8C8D8', '浅蓝'], ['#2F6F9F', '中蓝'], ['#153C58', '深蓝']],
    notes: '低饱和的蓝色系，适合数据页和科技感页面。'
  },
  {
    id: 'color-paper', title: '纸感中性 · 页面底', type: 'color', folder: '配色研究',
    tags: ['中性色', '底色'], added: '2026-07-20', favorite: false,
    dimensions: '4 色组合', ratio: '4 / 3',
    swatches: [['#ECEEE9', '浅纸'], ['#DFE3DD', '中纸'], ['#8D918C', '灰'], ['#1B1C1F', '墨黑']],
    notes: '纸感中性色组，适合作为页面底色和文字层级。'
  },
  {
    id: 'color-sage', title: '苔绿 · 数据强调', type: 'color', folder: '配色研究',
    tags: ['强调色', '自然'], added: '2026-07-20', favorite: false,
    dimensions: '4 色组合', ratio: '4 / 3',
    swatches: [['#E7EAD7', '浅苔'], ['#8FA267', '苔绿'], ['#4C6B45', '深绿'], ['#17351F', '墨绿']],
    notes: '苔绿系适合增长、健康、自然主题的视觉。'
  }
];

const state = {
  assets: seedAssets.slice(),
  activeFolder: '全部素材',
  activeTag: null,
  activeType: 'all',
  sort: 'newest',
  view: 'grid',
  selectedId: seedAssets[0].id,
  inspectorOpen: false,
  lightboxId: null,
  confirmDelete: false,
  editingTitle: null,
  editingFolder: null,
  newFolderParent: null,
  deleteFolderTarget: null,
  folderOrder: FOLDER_ORDER.slice(2),
  folderParents: Object.fromEntries(FOLDER_ORDER.slice(2).map((folder) => [folder, null])),
  folderNames: Object.fromEntries(FOLDER_ORDER.slice(2).map((folder) => [folder, folder]))
};

const $ = (selector) => document.querySelector(selector);
const sidebar = $('#sidebar');
const sidebarBackdrop = $('#sidebarBackdrop');
const library = $('#library');
const libraryGrid = $('#libraryGrid');
const libraryList = $('#libraryList');
const emptyState = $('#emptyState');
const statusCount = $('#statusCount');
const folderNav = $('#folderNav');
const typeTabs = $('#typeTabs');
const inspector = $('#inspector');
const sortSelect = $('#sortSelect');
const dropOverlay = $('#dropOverlay');
const fileInput = $('#fileInput');
const toast = $('#toast');
const lightbox = $('#lightbox');
const lightboxStage = $('#lightboxStage');
const lightboxFooter = $('#lightboxFooter');
const modeBadge = $('#modeBadge');
const newFolderBtn = $('#newFolderBtn');
const shareBtn = $('#shareBtn');
const passwordBtn = $('#passwordBtn');
const authOverlay = $('#authOverlay');
const authForm = $('#authForm');
const authInput = $('#authInput');
const viewOnlyBtn = $('#viewOnlyBtn');
const passwordModal = $('#passwordModal');
const passwordForm = $('#passwordForm');
const currentPasswordInput = $('#currentPasswordInput');
const newPasswordInput = $('#newPasswordInput');
const confirmPasswordInput = $('#confirmPasswordInput');
const folderModal = $('#folderModal');
const folderForm = $('#folderForm');
const folderModalTitle = $('#folderModalTitle');
const folderModalHint = $('#folderModalHint');
const folderNameInput = $('#folderNameInput');
const folderCancel = $('#folderCancel');
const deleteFolderModal = $('#deleteFolderModal');
const deleteFolderText = $('#deleteFolderText');
const deleteFolderCancel = $('#deleteFolderCancel');
const deleteFolderConfirm = $('#deleteFolderConfirm');

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));
}

function displayFolderName(key) {
  return state.folderNames[key] || key;
}

function getEditPassword() {
  const saved = localStorage.getItem('inspirationDrawerPassword');
  if (saved) return saved;
  localStorage.setItem('inspirationDrawerPassword', DEFAULT_PASSWORD);
  return DEFAULT_PASSWORD;
}

function buildViewUrl() {
  const url = new URL(window.location.href);
  url.search = 'view=1';
  return url.toString();
}

function folderIncludes(parentKey, targetKey) {
  let current = targetKey;
  while (current) {
    if (current === parentKey) return true;
    current = state.folderParents[current];
  }
  return false;
}

function ensureUnclassifiedFolder() {
  if (!state.folderOrder.includes('未分类')) {
    state.folderOrder.push('未分类');
    state.folderNames['未分类'] = '未分类';
    state.folderParents['未分类'] = null;
  }
}

function openFolderModal(parentKey) {
  state.newFolderParent = parentKey || null;
  folderModalTitle.textContent = parentKey ? '新建子文件夹' : '新建文件夹';
  folderModalHint.textContent = parentKey ? `将创建在：${displayFolderName(parentKey)}` : '创建一个新的顶层文件夹';
  folderNameInput.value = '';
  folderModal.hidden = false;
  folderNameInput.focus();
}

function createFolderFromForm() {
  const name = folderNameInput.value.trim().replace(/\s+/g, ' ');
  if (!name) {
    showToast('文件夹名称不能为空');
    return;
  }
  if (Object.values(state.folderNames).includes(name)) {
    showToast('已经有同名文件夹');
    return;
  }
  const key = `folder-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  state.folderOrder.push(key);
  state.folderNames[key] = name;
  state.folderParents[key] = state.newFolderParent || null;
  state.newFolderParent = null;
  folderModal.hidden = true;
  renderLibrary();
  showToast('文件夹已创建');
}

function openDeleteFolderModal(key) {
  state.deleteFolderTarget = key;
  deleteFolderText.textContent = `删除“${displayFolderName(key)}”后，里面的素材会移到“未分类”，子文件夹也会一起删除。`;
  deleteFolderModal.hidden = false;
}

function confirmDeleteFolder() {
  const key = state.deleteFolderTarget;
  if (!key) return;
  ensureUnclassifiedFolder();
  const affected = state.folderOrder.filter((folder) => folderIncludes(key, folder));
  state.assets.forEach((asset) => {
    if (affected.includes(asset.folder)) asset.folder = '未分类';
  });
  state.folderOrder = state.folderOrder.filter((folder) => !affected.includes(folder));
  affected.forEach((folder) => {
    delete state.folderNames[folder];
    delete state.folderParents[folder];
  });
  if (affected.includes(state.activeFolder)) {
    state.activeFolder = '全部素材';
    state.activeTag = null;
  }
  state.deleteFolderTarget = null;
  deleteFolderModal.hidden = true;
  renderLibrary();
  showToast('文件夹已删除');
}

function icon(name) {
  return ICONS[name] || '';
}

function hydrateIcons(root) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    const name = el.dataset.icon;
    if (ICONS[name]) {
      el.innerHTML = ICONS[name];
    }
  });
}

function isLight(hex) {
  const value = hex.replace('#', '');
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 160;
}

function baseFilteredAssets() {
  return state.assets.filter((asset) => {
    const folderOk = state.activeFolder === '全部素材'
      || (state.activeFolder === '我的收藏' ? asset.favorite : folderIncludes(state.activeFolder, asset.folder));
    const tagOk = !state.activeTag || asset.tags.includes(state.activeTag);
    return folderOk && tagOk;
  });
}

function visibleAssets() {
  return baseFilteredAssets()
    .filter((asset) => {
      const typeOk = state.activeType === 'all' || asset.type === state.activeType;
      return typeOk;
    })
    .sort((a, b) => {
      if (state.sort === 'newest') return b.added.localeCompare(a.added);
      if (state.sort === 'oldest') return a.added.localeCompare(b.added);
      if (state.sort === 'name') return a.title.localeCompare(b.title, 'zh-CN');
      return (TYPE_LABELS[a.type] || '').localeCompare(TYPE_LABELS[b.type] || '', 'zh-CN');
    });
}

function renderMedia(asset, controls = false) {
  if (asset.type === 'font') {
    const spec = asset.spec || {};
    return `
      <div class="font-tile" style="font-family:${spec.family || 'sans-serif'};font-weight:${spec.weight || 400}">
        <span class="font-glyph">${escapeHtml(spec.glyph || 'Aa')}</span>
        <span class="font-sample-text">${escapeHtml(spec.sample || '')}</span>
        <span class="font-meta">${escapeHtml(spec.meta || '')}</span>
      </div>`;
  }

  if (asset.type === 'color') {
    const cells = asset.swatches.map((swatch) => {
      const hex = Array.isArray(swatch) ? swatch[0] : swatch;
      const label = Array.isArray(swatch) ? swatch[1] : swatch;
      const light = isLight(hex) ? 'light' : '';
      return `<div class="color-cell ${light}" style="background:${hex}"><span>${escapeHtml(label)}</span></div>`;
    }).join('');
    return `<div class="color-tile">${cells}</div>`;
  }

  if (asset.type === 'pdf') {
    if (!controls) return renderPdfCover(asset);
    return `
      <div class="pdf-stage">
        <iframe class="pdf-frame" src="${asset.src}" title="${escapeHtml(asset.title)}"></iframe>
        <a class="pdf-open" href="${asset.src}" target="_blank" rel="noopener">${icon('fileText')}<span>打开 PDF</span></a>
      </div>`;
  }

  if (asset.type === 'video') {
    const posterAttr = asset.poster ? ` poster="${asset.poster}"` : '';
    if (!controls && asset.poster) {
      return `<img src="${asset.poster}" alt="${escapeHtml(asset.title)}" loading="lazy">`;
    }
    return `<video src="${asset.src}"${posterAttr}${controls ? ' controls' : ''} preload="metadata" muted playsinline></video>`;
  }

  return `<img src="${asset.src}" alt="${escapeHtml(asset.title)}" loading="lazy">`;
}

function renderPdfCover(asset) {
  return `
    <div class="pdf-cover">
      <span class="pdf-icon">${icon('fileText')}</span>
      <span class="pdf-format">PDF</span>
      <span class="pdf-name">${escapeHtml(asset.title)}</span>
      <span class="pdf-hint">${escapeHtml(asset.dimensions || '文档')}</span>
    </div>`;
}

function renderCard(asset, index) {
  const selected = asset.id === state.selectedId ? ' selected' : '';
  const badgeColor = TYPE_BADGES[asset.type] || 'var(--ink-muted)';
  return `
    <article class="asset-card${selected}" data-id="${asset.id}" tabindex="0" role="button" aria-label="${escapeHtml(asset.title)}">
      <div class="asset-media" data-expand="${asset.id}" style="aspect-ratio:${asset.ratio || '4 / 3'};--badge-color:${badgeColor}">
        <span class="asset-index">${String(index + 1).padStart(2, '0')}</span>
        <span class="type-badge">${TYPE_LABELS[asset.type]}</span>
        ${renderMedia(asset)}
        ${VIEW_MODE ? '' : `<button class="favorite-btn${asset.favorite ? ' active' : ''}" data-fav="${asset.id}" type="button" title="${asset.favorite ? '取消收藏' : '收藏'}">${icon('heart')}</button>`}
        <button class="expand-btn" data-expand="${asset.id}" type="button" title="放大浏览">${icon('expand')}</button>
      </div>
      <div class="asset-meta">
        <span class="asset-title">${escapeHtml(asset.title)}</span>
        <span class="asset-sub">${escapeHtml(asset.tags.slice(0, 2).join(' / '))}</span>
      </div>
    </article>`;
}

function renderRow(asset, index) {
  const selected = asset.id === state.selectedId ? ' selected' : '';
  const tags = asset.tags.slice(0, 3).map((tag) => `<span class="row-tag">${escapeHtml(tag)}</span>`).join('');
  return `
    <article class="asset-row${selected}" data-id="${asset.id}" tabindex="0" role="button" aria-label="${escapeHtml(asset.title)}">
      <div class="row-thumb" data-expand="${asset.id}">${renderMedia(asset)}</div>
      <div class="row-body">
        <h3 class="row-title">${String(index + 1).padStart(2, '0')} · ${escapeHtml(asset.title)}</h3>
        <div class="row-tags">${tags}</div>
      </div>
      <div class="row-meta">
        <span>${TYPE_LABELS[asset.type]}</span>
        <span>${escapeHtml(asset.added)}</span>
      </div>
      ${VIEW_MODE ? '' : `<button class="favorite-btn row-fav${asset.favorite ? ' active' : ''}" data-fav="${asset.id}" type="button" title="${asset.favorite ? '取消收藏' : '收藏'}">${icon('heart')}</button>`}
    </article>`;
}

function renderNav() {
  const systemRows = ['全部素材', '我的收藏'].map((folder) => {
    const count = state.assets.filter((asset) => {
      if (folder === '全部素材') return true;
      return asset.favorite;
    }).length;
    const active = state.activeFolder === folder && !state.activeTag ? ' active' : '';
    return `
      <div class="nav-row">
        <button class="nav-btn${active}" data-folder="${escapeHtml(folder)}" type="button">
          <span class="nav-icon">${icon('folder')}</span>
          <span class="nav-name">${escapeHtml(folder)}</span>
          <span class="nav-count">${count}</span>
        </button>
      </div>`;
  }).join('');

  function countFolderAssets(folder) {
    return state.assets.filter((asset) => folderIncludes(folder, asset.folder)).length;
  }

  function folderRow(folder, depth) {
    const count = countFolderAssets(folder);
    const active = state.activeFolder === folder && !state.activeTag ? ' active' : '';
    const isRenamable = state.folderNames[folder] !== undefined;
    if (state.editingFolder === folder) {
      return `
        <div class="folder-edit-row" data-folder-edit="${escapeHtml(folder)}" style="--depth:${depth}">
          <input class="folder-edit-input" value="${escapeHtml(displayFolderName(folder))}" maxlength="20" aria-label="文件夹名称">
          <button class="folder-edit-action" data-rename-save="${escapeHtml(folder)}" type="button" title="保存名称">${icon('check')}</button>
          <button class="folder-edit-action" data-rename-cancel="${escapeHtml(folder)}" type="button" title="取消修改">${icon('close')}</button>
        </div>`;
    }
    const actions = [];
    if (isRenamable && !VIEW_MODE) {
      actions.push(`<button class="folder-edit-btn" data-rename-folder="${escapeHtml(folder)}" type="button" title="重命名文件夹">${icon('pencil')}</button>`);
      actions.push(`<button class="folder-edit-btn" data-new-subfolder="${escapeHtml(folder)}" type="button" title="新建子文件夹">${icon('folderPlus')}</button>`);
      if (folder !== '未分类') {
        actions.push(`<button class="folder-edit-btn danger" data-delete-folder="${escapeHtml(folder)}" type="button" title="删除文件夹">${icon('trash')}</button>`);
      }
    }
    return `
      <div class="nav-row" style="--depth:${depth}">
        <button class="nav-btn${active}" data-folder="${escapeHtml(folder)}" type="button">
          <span class="nav-icon">${icon('folder')}</span>
          <span class="nav-name">${escapeHtml(displayFolderName(folder))}</span>
          <span class="nav-count">${count}</span>
        </button>
        ${actions.join('')}
      </div>`;
  }

  function folderTree(parent, depth = 0) {
    return state.folderOrder
      .filter((folder) => state.folderParents[folder] === parent)
      .map((folder) => folderRow(folder, depth) + folderTree(folder, depth + 1))
      .join('');
  }

  folderNav.innerHTML = systemRows + folderTree(null);
  hydrateIcons(folderNav);
  if (state.editingFolder) {
    requestAnimationFrame(() => {
      const input = folderNav.querySelector('.folder-edit-input');
      if (input) {
        input.focus();
        input.select();
      }
    });
  }
}

function saveFolderName(key) {
  if (VIEW_MODE) return;
  const input = folderNav.querySelector('.folder-edit-input');
  const name = input ? input.value.trim().replace(/\s+/g, ' ') : '';
  if (!name) {
    showToast('名称不能为空');
    return;
  }
  const duplicate = Object.entries(state.folderNames).some(([otherKey, otherName]) => otherKey !== key && otherName === name);
  if (duplicate) {
    showToast('已经有同名文件夹');
    return;
  }
  state.folderNames[key] = name;
  state.editingFolder = null;
  renderLibrary();
  showToast('文件夹已重命名');
}

function renderTypeTabs() {
  const base = baseFilteredAssets();
  const buttons = TYPE_TABS.map((tab) => {
    const count = tab.value === 'all' ? base.length : base.filter((asset) => asset.type === tab.value).length;
    const active = state.activeType === tab.value ? ' active' : '';
    return `
      <button class="type-tab${active}" data-type="${tab.value}" type="button" role="tab" aria-selected="${state.activeType === tab.value}">
        <span>${escapeHtml(tab.label)}</span>
        <span class="type-count">${count}</span>
      </button>`;
  }).join('');
  typeTabs.innerHTML = buttons;
  hydrateIcons(typeTabs);
}

function renderInspectorPalette(asset) {
  const cells = asset.swatches.map((swatch) => {
    const hex = Array.isArray(swatch) ? swatch[0] : swatch;
    const label = Array.isArray(swatch) ? swatch[1] : swatch;
    const light = isLight(hex) ? ' light' : '';
    return `<div class="palette-swatch${light}" style="background:${hex}"><span>${escapeHtml(label)}</span></div>`;
  }).join('');
  return `
    <section class="inspector-section">
      <h3>配色</h3>
      <div class="inspector-palette">${cells}</div>
    </section>`;
}

function renderInspector() {
  const asset = state.assets.find((item) => item.id === state.selectedId);
  if (!asset) {
    inspector.innerHTML = '<div class="inspector-placeholder">选择一项素材查看详情</div>';
    inspector.classList.remove('open');
    return;
  }

  const actionArea = (asset.type === 'image' || asset.type === 'page' || asset.type === 'video' || asset.type === 'pdf')
    ? `<button class="action-btn" data-action="download" type="button">${icon('download')}<span>下载</span></button>`
    : '';
  const mediaZoom = asset.type === 'video'
    ? 'title="点击播放"'
    : asset.type === 'pdf'
      ? ''
      : 'data-action="zoom" title="放大浏览"';
  const actionButtons = VIEW_MODE ? '' : `
      <div class="inspector-actions">
        <button class="action-btn" data-action="zoom" type="button">${icon('expand')}<span>放大</span></button>
        <button class="action-btn primary" data-action="favorite" type="button">${icon('heart')}<span>${asset.favorite ? '已收藏' : '收藏'}</span></button>
        ${actionArea}
        <button class="action-btn danger${state.confirmDelete ? ' confirm' : ''}" data-action="delete" type="button">${icon('trash')}<span>${state.confirmDelete ? '确认删除' : '删除'}</span></button>
      </div>`;

  inspector.innerHTML = `
    <div class="inspector-media" ${mediaZoom}>${renderMedia(asset, true)}</div>
    <div class="inspector-body">
      <div class="inspector-head">
        <div>
          <span class="inspector-kicker">${TYPE_LABELS[asset.type]} · ${escapeHtml(displayFolderName(asset.folder))}</span>
          ${state.editingTitle === asset.id
            ? `<div class="title-edit-row">
                <input class="title-edit-input" value="${escapeHtml(asset.title)}" maxlength="60" aria-label="文件名称">
                <button class="title-edit-action" data-title-save="${asset.id}" type="button" title="保存名称">${icon('check')}</button>
                <button class="title-edit-action" data-title-cancel="${asset.id}" type="button" title="取消修改">${icon('close')}</button>
              </div>`
            : `<div class="inspector-title-row">
                <h2 class="inspector-title">${escapeHtml(asset.title)}</h2>
                ${VIEW_MODE ? '' : `<button class="title-edit-btn" data-edit-title="${asset.id}" type="button" title="重命名文件">${icon('pencil')}</button>`}
              </div>`}
        </div>
        <button class="icon-btn inspector-close" id="inspectorClose" type="button" title="关闭详情" aria-label="关闭详情">${icon('close')}</button>
      </div>
      <dl class="meta-list">
        <div class="meta-item"><dt>加入时间</dt><dd>${escapeHtml(asset.added)}</dd></div>
        <div class="meta-item"><dt>类型</dt><dd>${TYPE_LABELS[asset.type]}</dd></div>
        <div class="meta-item"><dt>尺寸</dt><dd>${escapeHtml(asset.dimensions || '—')}</dd></div>
        <div class="meta-item"><dt>收藏夹</dt><dd>${escapeHtml(displayFolderName(asset.folder))}</dd></div>
      </dl>
      <section class="inspector-section">
        <h3>案例介绍</h3>
        <textarea class="inspector-notes-input" data-notes="${asset.id}" rows="5" maxlength="500" placeholder="写下这个案例的亮点、来源或使用场景"${VIEW_MODE ? ' readonly' : ''}>${escapeHtml(asset.notes || '')}</textarea>
      </section>
      <section class="inspector-section">
        <h3>标签</h3>
        <div class="inspector-tags">${asset.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
      </section>
      ${asset.swatches ? renderInspectorPalette(asset) : ''}
      ${actionButtons}
    </div>`;
  inspector.classList.toggle('open', state.inspectorOpen);
  hydrateIcons(inspector);
  focusTitleEditor();
}

function focusTitleEditor() {
  requestAnimationFrame(() => {
    const input = document.querySelector('#lightbox:not([hidden]) .title-edit-input') || document.querySelector('.title-edit-input');
    if (input) {
      input.focus();
      input.select();
    }
  });
}

function saveAssetTitle(id = state.editingTitle, input = null) {
  if (VIEW_MODE) return;
  if (!input) {
    const row = document.querySelector('#lightbox:not([hidden]) .title-edit-row') || document.querySelector('.title-edit-row');
    input = row?.querySelector('.title-edit-input');
  }
  const asset = state.assets.find((item) => item.id === id);
  if (!id || !input || !asset) return;
  const title = input.value.trim().replace(/\s+/g, ' ');
  if (!title) {
    showToast('名称不能为空');
    return;
  }
  asset.title = title;
  state.editingTitle = null;
  renderLibrary();
  if (state.lightboxId) renderLightbox();
  showToast('文件名称已修改');
}

function cancelAssetTitle() {
  state.editingTitle = null;
  renderLibrary();
  if (state.lightboxId) renderLightbox();
}

function renderLightbox() {
  const list = visibleAssets();
  const asset = state.assets.find((item) => item.id === state.lightboxId);
  if (!asset) return;
  const index = list.findIndex((item) => item.id === asset.id);
  const actionArea = VIEW_MODE ? '' : (asset.type === 'image' || asset.type === 'page' || asset.type === 'video' || asset.type === 'pdf')
    ? `<button class="lightbox-action" data-action="download" type="button">${icon('download')}<span>下载</span></button>`
    : '';

  lightboxStage.innerHTML = `<div class="lightbox-media">${renderMedia(asset, true)}</div>`;
  lightboxFooter.innerHTML = `
    <div class="lightbox-caption">
      <span class="lightbox-count">${String(index + 1).padStart(2, '0')} / ${String(list.length).padStart(2, '0')}</span>
      ${state.editingTitle === asset.id
        ? `<div class="title-edit-row lightbox-title-row">
            <input class="title-edit-input" value="${escapeHtml(asset.title)}" maxlength="60" aria-label="文件名称">
            <button class="title-edit-action" data-title-save="${asset.id}" type="button" title="保存名称">${icon('check')}</button>
            <button class="title-edit-action" data-title-cancel="${asset.id}" type="button" title="取消修改">${icon('close')}</button>
          </div>`
        : `<div class="lightbox-title-row">
            <strong>${escapeHtml(asset.title)}</strong>
            <button class="title-edit-btn" data-edit-title="${asset.id}" type="button" title="重命名文件">${icon('pencil')}</button>
          </div>`}
      <span>${escapeHtml(displayFolderName(asset.folder))}</span>
    </div>
    ${actionArea ? `<div class="lightbox-actions">
      <button class="lightbox-action primary" data-action="favorite" type="button">${icon('heart')}<span>${asset.favorite ? '已收藏' : '收藏'}</span></button>
      ${actionArea}
      <button class="lightbox-action danger${state.confirmDelete ? ' confirm' : ''}" data-action="delete" type="button">${icon('trash')}<span>${state.confirmDelete ? '确认删除' : '删除'}</span></button>
    </div>` : ''}`;
  lightbox.querySelector('[data-lightbox-prev]').hidden = list.length <= 1;
  lightbox.querySelector('[data-lightbox-next]').hidden = list.length <= 1;
  hydrateIcons(lightboxStage);
  hydrateIcons(lightboxFooter);
  focusTitleEditor();
}

function openLightbox(id) {
  state.selectedId = id;
  state.inspectorOpen = true;
  state.lightboxId = id;
  state.confirmDelete = false;
  state.editingTitle = null;
  renderLibrary();
  renderLightbox();
  lightbox.hidden = false;
  hydrateIcons(lightbox);
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => lightbox.classList.add('open'));
}

function closeLightbox() {
  lightbox.classList.remove('open');
  state.lightboxId = null;
  document.body.style.overflow = '';
  window.setTimeout(() => {
    if (!state.lightboxId) lightbox.hidden = true;
  }, 180);
}

function lightboxStep(direction) {
  const list = visibleAssets();
  if (list.length < 2) return;
  const index = list.findIndex((item) => item.id === state.lightboxId);
  const next = list[(index + direction + list.length) % list.length];
  openLightbox(next.id);
}

function deleteAsset(id) {
  if (VIEW_MODE) return;
  if (!state.confirmDelete) {
    state.confirmDelete = true;
    renderLibrary();
    if (state.lightboxId) renderLightbox();
    return;
  }

  const list = visibleAssets();
  const index = list.findIndex((item) => item.id === id);
  const nextAsset = list[index + 1] || list[index - 1] || null;
  state.assets = state.assets.filter((item) => item.id !== id);
  state.confirmDelete = false;
  state.selectedId = nextAsset ? nextAsset.id : null;
  if (state.lightboxId === id) {
    closeLightbox();
  } else if (state.lightboxId) {
    renderLightbox();
  }
  renderLibrary();
  showToast('素材已删除');
}

function updateViewTitle() {
  $('#contextLabel').textContent = state.activeTag ? `标签 · ${state.activeTag}` : '素材库';
  $('#viewTitle').textContent = displayFolderName(state.activeFolder);
}

function updateModeUI() {
  modeBadge.textContent = VIEW_MODE ? '只读预览' : '编辑模式';
  modeBadge.classList.toggle('view', VIEW_MODE);
  modeBadge.hidden = false;
  newFolderBtn.hidden = VIEW_MODE;
  shareBtn.hidden = VIEW_MODE;
  passwordBtn.hidden = VIEW_MODE;
  importBtn.hidden = VIEW_MODE;
  if (VIEW_MODE) authOverlay.hidden = true;
}

function renderLibrary() {
  updateModeUI();
  const list = visibleAssets();
  libraryGrid.innerHTML = list.map(renderCard).join('');
  libraryList.innerHTML = list.map(renderRow).join('');
  libraryGrid.hidden = state.view !== 'grid';
  libraryList.hidden = state.view !== 'list';
  emptyState.hidden = list.length > 0;
  statusCount.textContent = `${list.length} 项素材`;

  if (list.length && !list.some((asset) => asset.id === state.selectedId)) {
    state.selectedId = list[0].id;
  } else if (!list.length) {
    state.selectedId = null;
  }

  hydrateIcons(libraryGrid);
  hydrateIcons(libraryList);
  renderNav();
  renderTypeTabs();
  updateViewTitle();
  renderInspector();
}

function selectAsset(id) {
  state.selectedId = id;
  state.inspectorOpen = true;
  state.confirmDelete = false;
  state.editingTitle = null;
  renderLibrary();
}

function toggleFavorite(id) {
  if (VIEW_MODE) return;
  const asset = state.assets.find((item) => item.id === id);
  if (!asset) return;
  asset.favorite = !asset.favorite;
  renderLibrary();
  if (state.lightboxId) renderLightbox();
  showToast(asset.favorite ? '已加入我的收藏' : '已取消收藏');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

function downloadAsset(asset) {
  if (VIEW_MODE) return;
  const link = document.createElement('a');
  link.href = asset.src;
  const extMatch = asset.src.match(/\.[a-z0-9]+$/i);
  const ext = extMatch ? extMatch[0] : (asset.type === 'video' ? '.mp4' : asset.type === 'pdf' ? '.pdf' : '.jpg');
  link.download = `${asset.title}${ext}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast('开始下载');
}

function readImageSize(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => resolve({ width: 1200, height: 800 });
    img.src = src;
  });
}

function readVideoSize(src) {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.muted = true;
    const timer = window.setTimeout(() => resolve({ width: 1280, height: 720, duration: 0 }), 4000);
    video.onloadedmetadata = () => {
      window.clearTimeout(timer);
      resolve({
        width: video.videoWidth || 1280,
        height: video.videoHeight || 720,
        duration: video.duration
      });
    };
    video.onerror = () => {
      window.clearTimeout(timer);
      resolve({ width: 1280, height: 720, duration: 0 });
    };
    video.src = src;
  });
}

function readVideoPoster(src) {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    const timer = window.setTimeout(() => resolve(null), 6000);
    const finish = (poster) => {
      window.clearTimeout(timer);
      resolve(poster);
    };
    video.onloadeddata = () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      const target = Math.max(0, Math.min(0.1, duration * 0.2 || 0.05));
      video.currentTime = target;
    };
    video.onseeked = () => {
      try {
        const width = Math.min(video.videoWidth || 1280, 960);
        const height = Math.max(1, Math.round(width * ((video.videoHeight || 720) / (video.videoWidth || 1280))));
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        finish(canvas.toDataURL('image/jpeg', 0.72));
      } catch {
        finish(null);
      }
    };
    video.onerror = () => finish(null);
    video.src = src;
    video.load();
  });
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return '—';
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  const digits = value >= 100 ? 0 : value >= 10 ? 1 : 2;
  return `${value.toFixed(digits)} ${units[unit]}`;
}

let uploadSeq = 0;

async function addFiles(fileList) {
  if (VIEW_MODE) return;
  const isImageFile = (file) => file.type.startsWith('image/') || /\.(jpe?g|png|gif|webp|bmp|heic)$/i.test(file.name);
  const isVideoFile = (file) => file.type.startsWith('video/') || /\.(mp4|mov|m4v|webm|mkv|avi)$/i.test(file.name);
  const isPdfFile = (file) => file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
  const files = Array.from(fileList).filter((file) => isImageFile(file) || isVideoFile(file) || isPdfFile(file));
  if (!files.length) {
    showToast('只支持图片、视频或 PDF 文件');
    return;
  }

  for (const file of files) {
    const src = URL.createObjectURL(file);
    const isPdf = isPdfFile(file);
    const isVideo = !isPdf && isVideoFile(file);
    const common = {
      id: `upload-${Date.now()}-${uploadSeq++}`,
      title: file.name.replace(/\.[^.]+$/, '') || '未命名素材',
      src,
      added: todayISO(),
      favorite: false
    };

    if (isPdf) {
      state.assets.unshift({
        ...common,
        type: 'pdf',
        folder: 'PDF 文档',
        tags: ['新加入', 'PDF'],
        ratio: '3 / 4',
        dimensions: formatFileSize(file.size),
        notes: '从本地导入的 PDF 文档。'
      });
      continue;
    }

    const size = isVideo ? await readVideoSize(src) : await readImageSize(src);
    const poster = isVideo ? await readVideoPoster(src) : null;
    const durationLabel = isVideo && Number.isFinite(size.duration) && size.duration > 0
      ? ` · ${size.duration.toFixed(1)}s`
      : '';
    state.assets.unshift({
      ...common,
      type: isVideo ? 'video' : 'image',
      folder: isVideo ? '视频案例' : '视觉素材',
      tags: isVideo ? ['新加入', '视频'] : ['新加入'],
      poster,
      ratio: `${size.width} / ${size.height}`,
      dimensions: `${size.width} × ${size.height}${durationLabel}`,
      notes: isVideo ? '从本地导入的视频案例。' : '从本地导入的图片素材。'
    });
  }

  state.activeFolder = '全部素材';
  state.activeTag = null;
  state.activeType = 'all';
  state.confirmDelete = false;
  state.editingTitle = null;
  state.selectedId = state.assets[0].id;
  state.inspectorOpen = true;
  renderLibrary();
  showToast(`${files.length} 个素材已加入`);
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarBackdrop.classList.remove('show');
}

document.addEventListener('click', (event) => {
  const renameButton = event.target.closest('[data-rename-folder]');
  if (renameButton) {
    if (VIEW_MODE) return;
    event.stopPropagation();
    state.editingFolder = renameButton.dataset.renameFolder;
    renderLibrary();
    return;
  }

  const saveButton = event.target.closest('[data-rename-save]');
  if (saveButton) {
    if (VIEW_MODE) return;
    event.stopPropagation();
    saveFolderName(saveButton.dataset.renameSave);
    return;
  }

  const cancelButton = event.target.closest('[data-rename-cancel]');
  if (cancelButton) {
    if (VIEW_MODE) return;
    event.stopPropagation();
    state.editingFolder = null;
    renderLibrary();
    return;
  }

  const editTitleButton = event.target.closest('[data-edit-title]');
  if (editTitleButton) {
    if (VIEW_MODE) return;
    event.stopPropagation();
    state.editingTitle = editTitleButton.dataset.editTitle;
    renderLibrary();
    if (state.lightboxId) renderLightbox();
    return;
  }

  const saveTitleButton = event.target.closest('[data-title-save]');
  if (saveTitleButton) {
    if (VIEW_MODE) return;
    event.stopPropagation();
    const row = saveTitleButton.closest('.title-edit-row');
    saveAssetTitle(saveTitleButton.dataset.titleSave, row?.querySelector('.title-edit-input'));
    return;
  }

  const cancelTitleButton = event.target.closest('[data-title-cancel]');
  if (cancelTitleButton) {
    if (VIEW_MODE) return;
    event.stopPropagation();
    cancelAssetTitle();
    return;
  }

  const newSubfolderButton = event.target.closest('[data-new-subfolder]');
  if (newSubfolderButton) {
    if (VIEW_MODE) return;
    event.stopPropagation();
    openFolderModal(newSubfolderButton.dataset.newSubfolder);
    return;
  }

  const deleteFolderButton = event.target.closest('[data-delete-folder]');
  if (deleteFolderButton) {
    if (VIEW_MODE) return;
    event.stopPropagation();
    openDeleteFolderModal(deleteFolderButton.dataset.deleteFolder);
    return;
  }

  const favoriteButton = event.target.closest('[data-fav]');
  if (favoriteButton) {
    if (VIEW_MODE) return;
    event.stopPropagation();
    toggleFavorite(favoriteButton.dataset.fav);
    return;
  }

  const expandButton = event.target.closest('[data-expand]');
  if (expandButton) {
    event.stopPropagation();
    openLightbox(expandButton.dataset.expand);
    return;
  }

  const lightboxClose = event.target.closest('[data-lightbox-close]');
  if (lightboxClose) {
    closeLightbox();
    return;
  }

  const lightboxPrev = event.target.closest('[data-lightbox-prev]');
  if (lightboxPrev) {
    lightboxStep(-1);
    return;
  }

  const lightboxNext = event.target.closest('[data-lightbox-next]');
  if (lightboxNext) {
    lightboxStep(1);
    return;
  }

  if (event.target.closest('.lightbox') && !event.target.closest('.lightbox-media, .lightbox-footer, .lightbox-close, .lightbox-nav')) {
    closeLightbox();
    return;
  }

  const actionButton = event.target.closest('[data-action]');
  if (actionButton) {
    event.stopPropagation();
    const id = state.lightboxId || state.selectedId;
    const action = actionButton.dataset.action;
    const asset = state.assets.find((item) => item.id === id);
    if (VIEW_MODE && action !== 'zoom') return;
    if (action === 'zoom') {
      openLightbox(id);
    } else if (action === 'favorite') {
      toggleFavorite(id);
    } else if (action === 'download') {
      if (asset) downloadAsset(asset);
    } else if (action === 'delete') {
      deleteAsset(id);
    }
    return;
  }

  const folderButton = event.target.closest('[data-folder]');
  if (folderButton) {
    state.activeFolder = folderButton.dataset.folder;
    state.activeTag = null;
    state.confirmDelete = false;
    state.editingTitle = null;
    closeSidebar();
    renderLibrary();
    return;
  }

  const typeButton = event.target.closest('[data-type]');
  if (typeButton) {
    state.activeType = typeButton.dataset.type;
    state.confirmDelete = false;
    state.editingTitle = null;
    renderLibrary();
    return;
  }

  const card = event.target.closest('.asset-card, .asset-row');
  if (card && card.dataset.id) {
    selectAsset(card.dataset.id);
    return;
  }

  const closeButton = event.target.closest('#inspectorClose');
  if (closeButton) {
    state.inspectorOpen = false;
    inspector.classList.remove('open');
  }
});

document.addEventListener('input', (event) => {
  const textarea = event.target.closest('[data-notes]');
  if (!textarea) return;
  const asset = state.assets.find((item) => item.id === textarea.dataset.notes);
  if (asset) asset.notes = textarea.value;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const titleInput = event.target.closest('.title-edit-input');
    if (titleInput) {
      event.preventDefault();
      saveAssetTitle();
      return;
    }
  }
  if (event.key === 'Escape' && state.editingTitle) {
    cancelAssetTitle();
    return;
  }
  if (event.key === 'Escape' && state.lightboxId) {
    closeLightbox();
    return;
  }
  if (event.key === 'ArrowLeft' && state.lightboxId) {
    lightboxStep(-1);
    return;
  }
  if (event.key === 'ArrowRight' && state.lightboxId) {
    lightboxStep(1);
    return;
  }
  if (event.key === 'Enter') {
    const input = event.target.closest('.folder-edit-input');
    if (input) {
      event.preventDefault();
      const folder = input.closest('[data-folder-edit]').dataset.folderEdit;
      saveFolderName(folder);
      return;
    }
  }
  if (event.key === 'Escape') {
    if (state.editingFolder) {
      state.editingFolder = null;
      renderLibrary();
      return;
    }
    closeSidebar();
    if (window.innerWidth <= 1280) {
      state.inspectorOpen = false;
      inspector.classList.remove('open');
    }
  }
});

library.addEventListener('keydown', (event) => {
  const container = state.view === 'grid' ? libraryGrid : libraryList;
  const cards = Array.from(container.querySelectorAll('.asset-card, .asset-row'));
  const currentIndex = cards.findIndex((card) => card.dataset.id === state.selectedId);
  if (event.key === 'Enter' || event.key === ' ') {
    const card = event.target.closest('.asset-card, .asset-row');
    if (card) {
      event.preventDefault();
      selectAsset(card.dataset.id);
    }
  }
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault();
    if (cards.length) {
      const next = cards[(currentIndex + 1) % cards.length];
      selectAsset(next.dataset.id);
      next.focus();
    }
  }
  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault();
    if (cards.length) {
      const prev = cards[(currentIndex - 1 + cards.length) % cards.length];
      selectAsset(prev.dataset.id);
      prev.focus();
    }
  }
});

$('#menuBtn').addEventListener('click', () => {
  sidebar.classList.add('open');
  sidebarBackdrop.classList.add('show');
});
sidebarBackdrop.addEventListener('click', closeSidebar);

$('#gridBtn').addEventListener('click', () => {
  state.view = 'grid';
  $('#gridBtn').classList.add('active');
  $('#listBtn').classList.remove('active');
  renderLibrary();
});

$('#listBtn').addEventListener('click', () => {
  state.view = 'list';
  $('#listBtn').classList.add('active');
  $('#gridBtn').classList.remove('active');
  renderLibrary();
});

sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value;
  state.confirmDelete = false;
  state.editingTitle = null;
  renderLibrary();
});

$('#importBtn').addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => {
  addFiles(fileInput.files);
  fileInput.value = '';
});

authForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (authInput.value === getEditPassword()) {
    editUnlocked = true;
    authOverlay.hidden = true;
    authInput.value = '';
    authInput.classList.remove('error');
    renderLibrary();
    showToast('已进入编辑模式');
  } else {
    authInput.classList.add('error');
    authInput.value = '';
    authInput.focus();
  }
});

viewOnlyBtn.addEventListener('click', () => {
  window.location.href = buildViewUrl();
});

shareBtn.addEventListener('click', async () => {
  const url = buildViewUrl();
  try {
    await navigator.clipboard.writeText(url);
    showToast('查看链接已复制');
  } catch {
    showToast(url);
  }
});

passwordBtn.addEventListener('click', () => {
  passwordModal.hidden = false;
  currentPasswordInput.value = '';
  newPasswordInput.value = '';
  confirmPasswordInput.value = '';
  currentPasswordInput.focus();
});

passwordCancel.addEventListener('click', () => {
  passwordModal.hidden = true;
});

passwordForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const current = currentPasswordInput.value;
  const next = newPasswordInput.value.trim();
  if (current !== getEditPassword()) {
    showToast('当前密码不正确');
    return;
  }
  if (next.length < 4) {
    showToast('新密码至少 4 位');
    return;
  }
  if (next !== confirmPasswordInput.value) {
    showToast('两次输入的新密码不一致');
    return;
  }
  localStorage.setItem('inspirationDrawerPassword', next);
  passwordModal.hidden = true;
  passwordForm.reset();
  showToast('编辑密码已修改');
});

passwordModal.addEventListener('click', (event) => {
  if (event.target === passwordModal) passwordModal.hidden = true;
});

newFolderBtn.addEventListener('click', () => {
  if (VIEW_MODE) return;
  openFolderModal(null);
});

folderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  createFolderFromForm();
});

folderCancel.addEventListener('click', () => {
  folderModal.hidden = true;
});

folderModal.addEventListener('click', (event) => {
  if (event.target === folderModal) folderModal.hidden = true;
});

deleteFolderCancel.addEventListener('click', () => {
  deleteFolderModal.hidden = true;
});

deleteFolderConfirm.addEventListener('click', confirmDeleteFolder);

deleteFolderModal.addEventListener('click', (event) => {
  if (event.target === deleteFolderModal) deleteFolderModal.hidden = true;
});

let dragDepth = 0;
library.addEventListener('dragenter', (event) => {
  event.preventDefault();
  if (VIEW_MODE) return;
  dragDepth += 1;
  dropOverlay.classList.add('active');
});
library.addEventListener('dragover', (event) => {
  event.preventDefault();
});
library.addEventListener('dragleave', (event) => {
  event.preventDefault();
  if (VIEW_MODE) return;
  dragDepth = Math.max(0, dragDepth - 1);
  if (!dragDepth) dropOverlay.classList.remove('active');
});
library.addEventListener('drop', (event) => {
  event.preventDefault();
  if (VIEW_MODE) return;
  dragDepth = 0;
  dropOverlay.classList.remove('active');
  addFiles(event.dataTransfer.files);
});

function initApp() {
  if (VIEW_MODE) {
    authOverlay.hidden = true;
    renderLibrary();
    return;
  }
  authOverlay.hidden = false;
  renderLibrary();
  authInput.focus();
}

initApp();
