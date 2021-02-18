USE employee_db;

INSERT INTO department (name) VALUES
    ('Founders'),
    ('Sales'),
    ('Marketing'),
    ('IT');

INSERT INTO role (title, salary, department_id) VALUES
    ('Chief Executive Officer', 140000, 1),
    ('Account Executive', 92000, 2),
    ('Sales Representative', 64000, 2),
    ('Marketing Director', 78000, 3),
    ('Marketing Designer', 63000, 3),
    ('Social Media Intern', 20000, 3),
    ('Server Administrator', 92000, 4),
    ('Software Engineer', 76000, 4),
    ('Tech Support', 48000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Brodie', 'Kidd', 1, null)
    ('Kason', 'Tang', 2, 1),
    ('Codie', 'Bone', 3, 2),
    ('Alia', 'Sandoval', 3, 2),
    ('Cooper', 'Drummond', 3, 1),
    ('Mohsin', 'Young', 4, 5),
    ('Dewey', 'Simons', 5, 5),
    ('Alishba', 'Delaney', 5, 5),
    ('Jorge', 'Conner', 5, 5),
    ('Jeff', 'Waters', 6, 5),
    ('Rian', 'Arroyo', 6, 5),
    