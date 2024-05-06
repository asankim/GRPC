// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v5.26.1
// source: proto/todo.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "todo";

export interface Todo {
  id: number;
  description: string;
  isDone: boolean;
}

export interface Todos {
  Todoed: Todo[];
}

export interface PostTodoDTO {
  description: string;
  isDone: boolean;
}

export interface Empty {
}

export const TODO_PACKAGE_NAME = "todo";

export interface TodoServiceClient {
  posstTodo(request: PostTodoDTO): Observable<Todo>;

  getTodos(request: Empty): Observable<Todos>;
}

export interface TodoServiceController {
  posstTodo(request: PostTodoDTO): Promise<Todo> | Observable<Todo> | Todo;

  getTodos(request: Empty): Promise<Todos> | Observable<Todos> | Todos;
}

export function TodoServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["posstTodo", "getTodos"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("TodoService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("TodoService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const TODO_SERVICE_NAME = "TodoService";