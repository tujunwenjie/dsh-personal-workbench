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
 * 跨插件激活事件：谁开面板就广播自己的 panel name，别家听到不是自己的就收起自己。
 * 这是唯一一处跨插件约定，不带任何插件名清单——本插件不列举、也不改别人的状态。
 */
export const ACTIVATE_EVENT = 'dsh-panel-activate'

/**
 * 入口行对外的语义属性（皮肤中心 contracts/semantic-attrs-v1.md 的 part 组
 * `sidebar-entry`）。ENTRY_ATTR 是本插件自己的锚点，这两个才是外面认这一行的公共契约。
 */
export const ENTRY_PLUGIN = 'personal-workbench'
export const ENTRY_PART = 'sidebar-entry'
/** 入口行的可读名称（aria-label / title / 行内文案，三处共用一份）。 */
export const ENTRY_LABEL = '工作台'

/**
 * 入口行的类名。
 *
 * 侧栏里 task-board / ssh / mnemon 的入口行都由 CSS Module 生成
 * `<前缀>_entry / _entryIcon / _entryLabel` 三个类（`_7D6uKa_entry`、`mL8Uca_entry`、
 * `NS3bAW_entry`），行结构是「按钮 + 图标槽 + 文案槽」。本插件样式是手写全局 CSS、
 * 没有 CSS Module 前缀，这里用同一套三段式命名补齐，保证 DOM 结构、图标槽宽度（24px）
 * 与文字起点和别的入口一致。
 */
export const ENTRY_CLASS = 'dshWorkbench_entry'
export const ENTRY_ICON_CLASS = 'dshWorkbench_entryIcon'
export const ENTRY_LABEL_CLASS = 'dshWorkbench_entryLabel'
