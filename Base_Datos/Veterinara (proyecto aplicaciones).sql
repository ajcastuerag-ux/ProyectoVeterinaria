create database veterinaria;
use veterinaria; 

DROP DATABASE veterinaria;
create table Veterinarios(
Id_vet INT AUTO_INCREMENT PRIMARY KEY,
nombre_completo varchar(50),
especialidad varchar(50),
telefono varchar(15), 
correo varchar(50),
horario_disponible varchar(100), 
anos_experiencia int,
cedula_profesional varchar(100),
observaciones varchar(100),
imagen varchar(500)
);

INSERT INTO Veterinarios 
(nombre_completo, especialidad, telefono, correo, horario_disponible, anos_experiencia, cedula_profesional, observaciones, imagen) 
VALUE
('Dr. Carlos Hernández', 'Cirugía', 1111111111, 'carlos.hdz@vetmail.com', '09:00', 8, 'CPE1234567', 'Especialista en tejidos blandos','https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D'),
('Dra. Mariana López', 'Dermatología', 1111111111, 'mariana.lopez@vetmail.com', '10:00', 5, 'CPE9876543', 'Excelente trato con gatos','https://img.freepik.com/foto-gratis/atractivo-nutriologo-masculino-joven-bata-laboratorio-sonriendo-contra-fondo-blanco_662251-2960.jpg?semt=ais_hybrid&w=740&q=80'),
('Dr. Roberto Silva', 'Consulta General', 1111111111, 'roberto.silva@vetmail.com', '08:30', 10, 'CPE1928374', 'Atención a animales exóticos', 'https://img.freepik.com/psd-gratis/medico-prepara-examen-medico-rutina_23-2150493277.jpg?semt=ais_hybrid&w=740&q=80');

CREATE TABLE Mascotas (
    Id_mascota INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) ,
    especie VARCHAR(50),
    raza VARCHAR(50),
    sexo VARCHAR(10),
    fecha_nacimiento DATE,
    color VARCHAR(50),
    nombre_propietario VARCHAR(50)
);

INSERT INTO Mascotas
(nombre, especie, raza, sexo, fecha_nacimiento, color, nombre_propietario)
VALUES
('Firulais', 'Perro', 'Labrador', 'Macho', '2020-05-10', 'Dorado', 'Carlos Pérez'),
('Misha', 'Gato', 'Siames', 'Hembra', '2022-03-14', 'Crema', 'Ana López'),
('Rocky', 'Perro', 'Bulldog Inglés', 'Macho', '2019-08-22', 'Blanco', 'Juan Martínez');



CREATE TABLE Servicios (
    Id_servicio INT AUTO_INCREMENT PRIMARY KEY,
    nombre_servicio VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2),
    fecha DATETIME,             
    duracion VARCHAR(50),
    categoria VARCHAR(50),
    Id_mascota INT,
    Id_vet INT,
    estado ENUM('Pendiente','Realizado','Cancelado') DEFAULT 'Pendiente',

    FOREIGN KEY (Id_mascota) REFERENCES Mascotas(Id_mascota),
    FOREIGN KEY (Id_vet) REFERENCES Veterinarios(Id_vet)
);

INSERT INTO Servicios
(nombre_servicio, descripcion, precio, fecha, duracion, categoria, Id_mascota, Id_vet, estado)
VALUES
('Consulta General', 'Revisión completa del estado de salud.', 350.00, '2025-02-10 10:00:00', '30 min', 'Consulta', 1, 3, 'Pendiente'),
('Baño y Corte', 'Baño profundo y corte de pelo higiénico.', 500.00, '2025-02-11 12:30:00', '1 hora', 'Estética', 2, 2, 'Realizado'),
('Vacunación', 'Aplicación de vacuna anual para perro.', 450.00, '2025-02-12 09:15:00', '20 min', 'Consulta', 3, 1, 'Pendiente');

CREATE TABLE Productos (
    Id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    categoria VARCHAR(50),
    marca VARCHAR(50),
    estado ENUM('activo','inactivo') DEFAULT 'activo'
);

INSERT INTO Productos (nombre, descripcion, precio, stock, categoria, marca, estado)
VALUES
('Alimento para Perros Adultos', 'Alimento balanceado para perros adultos de todas las razas', 850.00, 30, 'Alimento', 'PetCare', 'activo'),
('Shampoo Antipulgas', 'Shampoo para perros y gatos, elimina pulgas y garrapatas', 120.50, 50, 'Higiene', 'VetClean', 'activo'),
('Collar Antipulgas', 'Collar ajustable para perros y gatos, protección 3 meses', 200.00, 40, 'Accesorios', 'PetSafe', 'inactivo');
