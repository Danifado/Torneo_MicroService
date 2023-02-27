create table Fact_Salas(
	Id_Sala varchar(10), --Codigo de la sala
	Num_Payers int,
	Id_Tematica  varchar(100),
	Nombre_Tematica varchar(100),
	End_Queue date default dateadd(minute, 10, getdate()),
	Created_On date default getdate(),
	End_Time date,
	Is_Active bit
);

create table Fact_Usuarios(
	Id_Usuario int,
	Id_Sala varchar(10),
	Created_On date,
	Score varchar(100),
	Id_Preguntas_Asociadas int,
	Is_Active bit
);

create table Fact_Preguntas_Realizadas (
	Id_Pregunta int identity primary key,
	Id_Tematica varchar(100),
	Id_Sala varchar(10),
	Contenido varchar(max)
);

create table Fact_Resultados(
	Id_Resultado int identity primary key,
	Contenido varchar(max)
);

insert into Fact_Salas (
	Id_Sala,
	Num_Payers,
	Id_Tematica,
	Nombre_Tematica,
	End_Queue,
	Created_On,
	End_Time,
	Is_Active
)values(
	'E0OMUV1',
	0,
	'63df1c4afd28d9a46c39d79b',
	'Geography',
	dateadd(MINUTE, +10, getdate()),
	getdate(),
	null,
	1
);

insert into Fact_Usuarios (
	Id_Usuario,
	Id_Sala,
	Created_On,
	Is_Active
) values (
	1,
	'E0OMUV1',
	getdate(),
	1
)
