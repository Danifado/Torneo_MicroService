create table Fact_Torneo_Info (
	Id_Torneo_Info int identity primary key,
	Created_On date,
	Num_Prayers int
	foreign key (Id_Estado_Torneo) references Fact_Estado_Torneo(Id_Estado_Torneo),
);

create table Fact_Salas(
	Id_Sala varchar(10), --Codigo de la sala
	Num_Payers int,
	Id_Tematica  varchar(100),
	Nombre_Tematica varchar(100),
	End_Queue date,
	Created_On date,
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
)

create table Fact_Preguntas_Realizadas (
	Id_Preguntas_Realizadas int identity primary key,

)