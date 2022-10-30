import rc from '../public/assets/elec-pics/category/rc-project.jpg'
import micro from '../public/assets/elec-pics/category/microcontroller.jpg'
import fpga from '../public/assets/elec-pics/category/fpga.jpg'
import pcb from '../public/assets/elec-pics/category/pcb_design.jpg'
import control from '../public/assets/elec-pics/category/control_theory.jpg'

export const ElectronicsCategory=[
    {
        id: 1,
        name: "RC Project",
        description: "Design and build RC devices like transmitters, receivers, drones and cars", 
        img:rc,
        url:"/electronics/rc-project"

    },
    {
        id: 2,
        name: "Microcontroller Programming",
        description: "Learn to program microcontrollers like Arduino, ESP32, raspberry pi",
        img:micro,
        url: "electronics/microcontroller"

    },
    {
        id: 3,
        name: "FPGA Programming",
        description: "Learn the basics of FPGA using the Altera cyclone 4 board",
        img:fpga,
        url:"electronics/fpga"

    },
    {
        id: 4,
        name: "PCB Design and simulation",
        description: "Learn React fast by doing projects",
        img:pcb,
        url:"electronics/circuit-design"
    },
    {
        id: 5,
        name: "Control Theory",
        description: "Understand the fundamentals of Control Theory and it's so important",
        img:control,
        url:"electronics/control-theory"

    }
]