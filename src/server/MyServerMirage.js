import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      nacionality:Model,
      task: Model
    },

    seeds(server) {
      server.create("user", { name: "Bob", apellido: 'Wills',email:'j@hotmail.com' });
      server.create("user", { name: "Alice", apellido: 'McDonal',email:'j@hotmail.com' });
      server.create("nacionality",{name: 'Argentina'});
      server.create("task",{name: 'Argentina'});

    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all()
      });

      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody).data;

        return schema.users.create(attrs)
      });

      this.post("/users/delete/:id", (schema, request) => {
        let id = request.params.id
      
        return schema.users.find(id).destroy();
      });

      this.patch("/users/edit:id", function (schema, request) {
        let id = request.params.id
        let attrs = this.normalizedRequestAttrs();
      
        return schema.users.find(id).update(attrs)
      });

      this.get("/tasks", (schema) => {
        return schema.tasks.all()
      });

      this.post("/tasks", (schema, request) => {
        let attrs = JSON.parse(request.requestBody).data;

        return schema.tasks.create(attrs)
      });

      this.delete("/tasks/:id", (schema, request) => {
        let id = request.params.id
      
        return schema.tasks.find(id).destroy();
      });


    },
  })

  return server
}