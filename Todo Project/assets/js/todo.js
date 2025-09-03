$(function () {
  const $input = $("#container input[type='text']");
  const $list  = $("#container ul");

  // Load tasks from localStorage on page load
  loadTasks();

  // Add new todo on Enter
  $input.on("keydown", function (e) {
    if (e.key === "Enter" || e.which === 13) {
      e.preventDefault();
      const text = $(this).val().trim();
      if (!text) return;
      $(this).val("");
      addTask(text);
      saveTasks();
    }
  });

  // Delete todo
  $list.on("click", "span", function (e) {
    e.stopPropagation();
    $(this).parent().fadeOut(200, function () {
      $(this).remove();
      saveTasks();
    });
  });

  // Toggle completed
  $list.on("click", "li", function () {
    $(this).toggleClass("completed");
    saveTasks();
  });

  // (Optional) Toggle input visibility with the plus icon
  $(".fa-plus").on("click", function () {
    $input.slideToggle(150);
    $input.focus();
  });

  // ---- Helpers ----
  function addTask(text, completed = false) {
    const $li = $(
      "<li><span><i class='fa fa-trash'></i></span> " + escapeHtml(text) + "</li>"
    );
    if (completed) $li.addClass("completed");
    $list.append($li);
  }

  function saveTasks() {
    const tasks = [];
    $list.find("li").each(function () {
      const textOnly = $(this)
        .clone()
        .children() // remove the <span> with the icon
        .remove()
        .end()
        .text()
        .trim();

      tasks.push({
        text: textOnly,
        completed: $(this).hasClass("completed"),
      });
    });
    localStorage.setItem("todos", JSON.stringify(tasks));
  }

  function loadTasks() {
    const stored = JSON.parse(localStorage.getItem("todos")) || [];
    stored.forEach(t => addTask(t.text, t.completed));
  }

  // Very small XSS-safe escape for any text typed in
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
