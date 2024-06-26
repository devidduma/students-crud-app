# Students Management System

Each university needs a management system for students. We build a CRUD application to create, read, update and delete data of students. Our software suggests a way to digitalize and automate the management process of student data in a typical university faculty.

It is necessary that the new system will manage to provide faster interaction with the students data through a well-defined web interface. For this reason, we use Angular framework and Angular Material component library to build a good web interface and modify components.

## Dependencies

The following dependencies must be installed before running the project:
 - Angular Material: [Installation guide](https://material.angular.io/guide/getting-started)
 - JSON Server: [Installation guide](https://www.npmjs.com/package/json-server)

#### Commands to install and run dependencies

Run the following commands to install Angular Material, JSON Server and finally run the project:

```console
$ ng add @angular/material
$ npm install json-server
$ npx json-server db.json
$ ng serve
```

## Demonstration

| Read: Dashboard view                                        |
|-------------------------------------------------------------|
| <img src="./src/assets/1-dashboard-view.PNG" width="360px"> |

| Create: Add student form                                      | Student added successfully                                              |
|---------------------------------------------------------------|-------------------------------------------------------------------------|
| <img src="./src/assets/2-add-student-form.PNG" width="360px"> | <img src="./src/assets/3-student-added-successfully.PNG" width="360px"> |

| Update: Update email field of student                           | Email field updated successfully                               |
|-----------------------------------------------------------------|----------------------------------------------------------------|
| <img src="./src/assets/4-update-email-field.PNG" width="360px"> | <img src="./src/assets/5-update-successful.PNG" width="360px"> |

| Delete: Student deleted successfully                                      |
|---------------------------------------------------------------------------|
| <img src="./src/assets/6-student-deleted-successfully.PNG" width="360px"> |
