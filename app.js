var app = new Vue({
    el: "#app",
    data: {
        title: "To Do App",
        // Wil hold form input until it's added to the array
        newTodo: "",
        // Will hold all todo items
        todos: [
            { title: "Learn VueJs" },
            { title: "Build projects" },
            { title: "Start a Business" }
        ]
    },
    methods: {
        addTodo() {
            // Add a todo item to the array from form input
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = "";
        },
        deleteItem(todo) {
            // Check if user wants to really delete it
            const confirmation = confirm("Are you sure?");
            if (confirmation) { // If user pressed "OK"
                // Get index of current todo item
                const todoIndex = this.todos.indexOf(todo);
                // Remove item of array
                this.todos.splice(todoIndex, 1);
            }
        }
    }
});