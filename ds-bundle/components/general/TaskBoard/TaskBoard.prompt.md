TaskBoard from @luxor9/ui. Use via `window.Luxor9UI.TaskBoard` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface TaskBoardProps {
tasks: Array<{ id: string; title: string; subtasks: Array<{ id: string; title: string; completed: boolean }>; completed: boolean; isParallel?: boolean; dependencies?: string[]; assignedAgent?: string; output?: string }>; onToggleTask: (taskId: string) => void; onToggleSubTask: (taskId: string, subTaskId: string) => void; onAddSubTask: (taskId: string, title: string) => void; onRemoveSubTask?: (taskId: string, subTaskId: string) => void; onRemoveTask?: (taskId: string) => void; onAddTask?: (title: string) => void; onUpdateDependencies?: (taskId: string, dependencies: string[]) => void; onExecuteTask?: (task: any) => void; executingTaskIds?: Set<string>
}
```
