import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];
console.log(pacientes);


const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
    const resultado = pacientes.filter(
      (paciente) => paciente.especialidad === "Pediatra"
    )
    return resultado;
};
console.log(obtenPacientesAsignadosAPediatria);


const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
    const resultado = pacientes.filter(
      (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
    )
    return resultado;
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios);


const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  
  const resultado = pacientes.some(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  )
    
  return resultado;
};
console.log(activarProtocoloUrgencia);


const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
    const resultado = pacientes.map((paciente) => {
      if(paciente.especialidad === "Pediatra") {
        return {...paciente, especialidad: "Medico de familia" as Especialidad }
      } else {
        return paciente
      }
           
    })
    return resultado;
       
   };
console.log(reasignaPacientesAMedicoFamilia);


const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  
  const resultado = pacientes.some(
    (paciente) => paciente.especialidad === "Pediatra"
   
  )
  return resultado;
    
};
console.log(HayPacientesDePediatria);


interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
    
    const numeroPacientesMedicoFamilia = pacientes.filter((paciente) => 
    paciente.especialidad === "Medico de familia").length;

    const numeroPacientesPediatria = pacientes.filter((paciente) =>
    paciente.especialidad === "Pediatra").length;
    
    const numeroPacientesCardiologia = pacientes.filter((paciente) =>
    paciente.especialidad === "Cardiólogo").length;


    return {medicoDeFamilia: numeroPacientesMedicoFamilia, pediatria: numeroPacientesPediatria, cardiologia: numeroPacientesCardiologia}
    
};
console.log(cuentaPacientesPorEspecialidad);