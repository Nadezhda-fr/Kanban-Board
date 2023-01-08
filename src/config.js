const LIST_TYPES = {
    BACKLOG: 'backlog',
    IN_PROGRESS: 'inProgress',
    READY: 'ready',
    FINISHED: 'finished',
  }
  const LIST_COPY = {
    [LIST_TYPES.BACKLOG]: 'Backlog',
    [LIST_TYPES.IN_PROGRESS]: 'In progress',
    [LIST_TYPES.READY]: 'Ready',
    [LIST_TYPES.FINISHED]: 'Finished',
  }
  export { LIST_COPY, LIST_TYPES };