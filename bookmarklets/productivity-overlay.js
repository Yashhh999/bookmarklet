const existingOverlay = document.getElementById('bookmarklet-productivity-overlay');
if (existingOverlay) {
  document.body.removeChild(existingOverlay);
  createToast('Productivity overlay removed');
} else {
  const overlay = document.createElement('div');
  overlay.id = 'bookmarklet-productivity-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '10px';
  overlay.style.right = '10px';
  overlay.style.width = '300px';
  overlay.style.backgroundColor = 'rgba(30, 30, 30, 0.9)';
  overlay.style.borderRadius = '5px';
  overlay.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  overlay.style.color = 'white';
  overlay.style.fontFamily = 'Arial, sans-serif';
  overlay.style.padding = '10px';
  overlay.style.zIndex = '10000';
  overlay.style.fontSize = '14px';

  // Add a title bar with drag functionality
  const titleBar = document.createElement('div');
  titleBar.style.padding = '5px';
  titleBar.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
  titleBar.style.borderRadius = '5px 5px 0 0';
  titleBar.style.cursor = 'move';
  titleBar.style.marginBottom = '10px';
  titleBar.style.display = 'flex';
  titleBar.style.justifyContent = 'space-between';
  titleBar.style.alignItems = 'center';
  
  const title = document.createElement('span');
  title.textContent = 'Productivity Dashboard';
  title.style.fontWeight = 'bold';
  
  const closeButton = document.createElement('span');
  closeButton.innerHTML = '&times;';
  closeButton.style.cursor = 'pointer';
  closeButton.style.fontSize = '20px';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(overlay);
    createToast('Productivity overlay removed');
  });
  
  titleBar.appendChild(title);
  titleBar.appendChild(closeButton);
  overlay.appendChild(titleBar);

  let isDragging = false;
  let offsetX, offsetY;
  
  titleBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - overlay.getBoundingClientRect().left;
    offsetY = e.clientY - overlay.getBoundingClientRect().top;
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    overlay.style.left = (e.clientX - offsetX) + 'px';
    overlay.style.top = (e.clientY - offsetY) + 'px';
    overlay.style.right = 'auto';
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  const timerSection = document.createElement('div');
  timerSection.style.padding = '10px';
  timerSection.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
  
  const timerTitle = document.createElement('h3');
  timerTitle.textContent = 'Pomodoro Timer';
  timerTitle.style.margin = '0 0 10px 0';
  timerTitle.style.fontSize = '16px';
  
  const timerDisplay = document.createElement('div');
  timerDisplay.style.fontSize = '24px';
  timerDisplay.style.textAlign = 'center';
  timerDisplay.style.margin = '10px 0';
  timerDisplay.textContent = '25:00';
  
  const timerControls = document.createElement('div');
  timerControls.style.display = 'flex';
  timerControls.style.justifyContent = 'space-between';
  
  const startButton = document.createElement('button');
  startButton.textContent = 'Start';
  startButton.style.padding = '5px 10px';
  startButton.style.border = 'none';
  startButton.style.borderRadius = '3px';
  startButton.style.backgroundColor = '#4CAF50';
  startButton.style.color = 'white';
  startButton.style.cursor = 'pointer';
  
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset';
  resetButton.style.padding = '5px 10px';
  resetButton.style.border = 'none';
  resetButton.style.borderRadius = '3px';
  resetButton.style.backgroundColor = '#f44336';
  resetButton.style.color = 'white';
  resetButton.style.cursor = 'pointer';
  
  timerControls.appendChild(startButton);
  timerControls.appendChild(resetButton);
  
  timerSection.appendChild(timerTitle);
  timerSection.appendChild(timerDisplay);
  timerSection.appendChild(timerControls);
  overlay.appendChild(timerSection);
  
  // Add a to-do list
  const todoSection = document.createElement('div');
  todoSection.style.padding = '10px';
  
  const todoTitle = document.createElement('h3');
  todoTitle.textContent = 'Quick Tasks';
  todoTitle.style.margin = '0 0 10px 0';
  todoTitle.style.fontSize = '16px';
  
  const todoForm = document.createElement('form');
  todoForm.style.display = 'flex';
  todoForm.style.marginBottom = '10px';
  
  const todoInput = document.createElement('input');
  todoInput.type = 'text';
  todoInput.placeholder = 'Add a task...';
  todoInput.style.flex = '1';
  todoInput.style.padding = '5px';
  todoInput.style.border = 'none';
  todoInput.style.borderRadius = '3px';
  
  const todoAddButton = document.createElement('button');
  todoAddButton.type = 'submit';
  todoAddButton.textContent = '+';
  todoAddButton.style.marginLeft = '5px';
  todoAddButton.style.padding = '5px 10px';
  todoAddButton.style.border = 'none';
  todoAddButton.style.borderRadius = '3px';
  todoAddButton.style.backgroundColor = '#2196F3';
  todoAddButton.style.color = 'white';
  todoAddButton.style.cursor = 'pointer';
  
  todoForm.appendChild(todoInput);
  todoForm.appendChild(todoAddButton);
  
  const todoList = document.createElement('ul');
  todoList.style.listStyleType = 'none';
  todoList.style.padding = '0';
  todoList.style.margin = '0';
  todoList.style.maxHeight = '150px';
  todoList.style.overflowY = 'auto';
  
  todoSection.appendChild(todoTitle);
  todoSection.appendChild(todoForm);
  todoSection.appendChild(todoList);
  overlay.appendChild(todoSection);
  
  const quoteSection = document.createElement('div');
  quoteSection.style.padding = '10px';
  quoteSection.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
  quoteSection.style.fontStyle = 'italic';
  quoteSection.style.textAlign = 'center';
  
  const quotes = [
    "The secret of getting ahead is getting started.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict the future is to create it.",
    "It's not about having time, it's about making time."
  ];
  
  quoteSection.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  overlay.appendChild(quoteSection);
  
  document.body.appendChild(overlay);
  
  let timerInterval;
  let isTimerRunning = false;
  let timeLeft = 25 * 60; 
  
  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  startButton.addEventListener('click', () => {
    if (isTimerRunning) {
      clearInterval(timerInterval);
      startButton.textContent = 'Start';
      isTimerRunning = false;
    } else {
      startButton.textContent = 'Pause';
      isTimerRunning = true;
      
      timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          startButton.textContent = 'Start';
          isTimerRunning = false;
          alert('Pomodoro complete! Take a break.');
          timeLeft = 25 * 60;
          updateTimerDisplay();
        }
      }, 1000);
    }
  });
  
  resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    startButton.textContent = 'Start';
    isTimerRunning = false;
    timeLeft = 25 * 60;
    updateTimerDisplay();
  });
  
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const taskText = todoInput.value.trim();
    if (!taskText) return;
    
    const todoItem = document.createElement('li');
    todoItem.style.padding = '5px';
    todoItem.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    todoItem.style.margin = '5px 0';
    todoItem.style.borderRadius = '3px';
    todoItem.style.display = 'flex';
    todoItem.style.justifyContent = 'space-between';
    
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    
    const deleteButton = document.createElement('span');
    deleteButton.innerHTML = '&times;';
    deleteButton.style.cursor = 'pointer';
    deleteButton.style.color = '#ff6b6b';
    deleteButton.addEventListener('click', () => {
      todoList.removeChild(todoItem);
    });
    
    todoItem.appendChild(taskTextSpan);
    todoItem.appendChild(deleteButton);
    
    todoList.appendChild(todoItem);
    todoInput.value = '';
    todoInput.focus();
  });
  
  createToast('Productivity overlay added');
}

function createToast(message) {
  const existingToast = document.getElementById('bookmarklet-toast');
  if (existingToast) {
    document.body.removeChild(existingToast);
  }
  
  const toast = document.createElement('div');
  toast.id = 'bookmarklet-toast';
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  toast.style.color = 'white';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '5px';
  toast.style.zIndex = '1000000';
  document.body.appendChild(toast);
  
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast);
    }
  }, 3000);
}