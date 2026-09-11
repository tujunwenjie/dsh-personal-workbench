/**
 * 客户端共享常量：面板挂载点与宿主注入钩子的 data-attribute 名。
 * 单独成文件是因为样式（styles.ts）与组件（index.tsx）都要引用同一批名字。
 */

export const PANEL_NAME = 'personal-workbench'
export const ACTIVE_ATTR = 'data-dsh-personal-workbench-active'
export const PENDING_ATTR = 'data-dsh-personal-workbench-pending'
export const VIEW_ATTR = 'data-dsh-personal-workbench-view'
export const ENTRY_ATTR = 'data-dsh-personal-workbench-entry'
/**
 * 同族侧栏入口的 active 属性（面板互斥用）。
 *
 * 漏掉任何一家，都会出现「两个入口同时高亮、两个面板同时挂载」的聚焦状态异常：
 * 本插件开面板时会逐个摘掉这些属性，而对面（如 dsh-mnemon）的 MutationObserver
 * 正是靠「自己的 active 属性被摘掉」来关闭自己。
 */
export const SIBLING_ATTRS = [
  'data-dsh-taskboard-active',
  'data-dsh-ssh-active',
  'data-dsh-mnemon-active',
]
export const ACTIVATE_EVENT = 'dsh-panel-activate'

/**
 * 家族身份：侧栏入口行对外的语义属性（皮肤中心 contracts/semantic-attrs-v1.md 的
 * part 组 `sidebar-entry`，owner: family）。行属性 ENTRY_ATTR 是插件自己的锚点，
 * 这两个属性才是皮肤与兄弟插件认得出来的公共契约。
 */
export const ENTRY_PLUGIN = 'personal-workbench'
export const ENTRY_PART = 'sidebar-entry'
/** 入口行的可读名称（aria-label / title / 行内文案，三处共用一份）。 */
export const ENTRY_LABEL = '工作台'

/**
 * 入口行的类名。
 *
 * 家族里 task-board / ssh / mnemon 的入口行都由 CSS Module 生成
 * `<前缀>_entry / _entryIcon / _entryLabel` 三个类（`_7D6uKa_entry`、`mL8Uca_entry`、
 * `NS3bAW_entry`），行结构是「按钮 + 图标槽 + 文案槽」。本插件样式是手写全局 CSS、
 * 没有 CSS Module 前缀，这里用同一套三段式命名补齐，保证侧栏里这一行的 DOM 结构、
 * 图标槽宽度（24px）与文字起点和兄弟入口一致。
 */
export const ENTRY_CLASS = 'dshWorkbench_entry'
export const ENTRY_ICON_CLASS = 'dshWorkbench_entryIcon'
export const ENTRY_LABEL_CLASS = 'dshWorkbench_entryLabel'

/**
 * 家族入口行选择器：用来把本插件入口插到同一区块里，并在重渲染后仍保持相对顺序。
 * 必须包含兄弟插件的行属性，否则只看得到自己，位置会在各插件自愈时漂移。
 */
export const FAMILY_ENTRY_SELECTOR =
  '[data-dsh-taskboard-entry], [data-dsh-ssh-entry], [data-dsh-mnemon-entry], [data-dsh-personal-workbench-entry]'

/**
 * 点这些侧栏元素时应收起工作台面板（与 dsh-mnemon 的 SIDEBAR_CONTEXT_SELECTOR 对齐，
 * 否则点兄弟入口时工作台面板会赖着不走，两个入口同时高亮）。
 */
export const SIDEBAR_CONTEXT_SELECTOR = `${FAMILY_ENTRY_SELECTOR}, [class*="sessionRow"], [class*="projectRow"], [class*="searchResultRow"], [class*="searchResultWorkspace"], [class*="newSession"]`
