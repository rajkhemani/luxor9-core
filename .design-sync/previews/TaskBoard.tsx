import React from 'react';
import { TaskBoard } from '@luxor9/ui';

// TaskBoard is the "tactical plan" execution board. One rich story exercises the
// full status matrix: complete, active/parallel, dependency-locked, and pending,
// each with subtasks and a progress readout. Callbacks are no-ops for the card.
const noop = () => {};

export function TacticalPlan() {
  const tasks = [
    {
      id: 't1',
      title: 'Provision OSS inference stack (Ollama + Whisper + Kokoro)',
      completed: true,
      subtasks: [
        { id: 's1', title: 'Pull llama3.1:8b + all-minilm', completed: true },
        { id: 's2', title: 'Wire OLLAMA_URL into app.config', completed: true },
      ],
    },
    {
      id: 't2',
      title: 'Route BaseAgent.reason() through UniversalMCP',
      completed: false,
      isParallel: true,
      subtasks: [
        { id: 's3', title: 'Swap get_nim for get_universal', completed: true },
        { id: 's4', title: 'Local-first fallback test', completed: false },
      ],
    },
    {
      id: 't3',
      title: 'Ship SearXNG-backed web search to the T2 VPs',
      completed: false,
      isParallel: true,
      dependencies: ['t1'],
      subtasks: [{ id: 's5', title: 'Wire SearxngClient.search into tools', completed: false }],
    },
    {
      id: 't4',
      title: 'Cut embeddings over to Chroma + all-minilm',
      completed: false,
      dependencies: ['t2', 't3'],
      subtasks: [],
    },
  ];
  return (
    <div className="dark" style={{ background: '#050505', padding: 24 }}>
      <div style={{ maxWidth: 720 }}>
        <TaskBoard tasks={tasks} onToggleTask={noop} onToggleSubTask={noop} onAddSubTask={noop} />
      </div>
    </div>
  );
}
