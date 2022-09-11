import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import './main.css';

const data = [
    {person: "J. Albani",
 schedule:[
    {
       id: "EN-3131-13",
       title: "Steam Generators",
       daysOfWeek: "1,3,5",
       startTime: "10:00",
       endTime: "10:50",
       room: "BR 206",
    },    {
       id: "EN-3131-14",
       title: "Steam Generators",
       daysOfWeek: "1,3,5",
       startTime: "11:00",
       endTime: "11:50",
       room: "BR 206",
    },    {
       id: "EN-3131L-41",
       title: "Steam Generators Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 143",
    },    {
       id: "EN-3131L-45",
       title: "Steam Generators Lab",
       daysOfWeek: "4",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 143",
    },    {
       id: "EN-3131L-91",
       title: "Steam Generators Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 143",
    },    {
       id: "EN-3131L-95",
       title: "Steam Generators Lab",
       daysOfWeek: "4",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 143",
    }
  ]
},
{person: "M. Bastoni",
 schedule:
  [
    {
       id: "EN-2112L-16",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "1",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 102",
    },    {
       id: "EN-2112L-21",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 102",
    },    {
       id: "EN-2112L-26",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "2",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 102",
    }
  ]
},
{person: "J. Bausch",
 schedule:
  [
    {
       id: "EN-3212L-21",
       title: "Electronics Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "09:50",
       room: "BR 222",
    },    {
       id: "EN-3212L-23",
       title: "Electronics Lab",
       daysOfWeek: "2",
       startTime: "10:00",
       endTime: "11:50",
       room: "BR 222",
    },    {
       id: "EN-3212L-25",
       title: "Electronics Lab",
       daysOfWeek: "2",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 222",
    },    {
       id: "EN-3216-13",
       title: "Operational Controls",
       daysOfWeek: "1,3,5",
       startTime: "10:00",
       endTime: "10:50",
       room: "HA 107",
    },    {
       id: "EN-3216-17",
       title: "Operational Controls",
       daysOfWeek: "1,3,5",
       startTime: "14:00",
       endTime: "14:50",
       room: "BR 303",
    }
  ]
},
{person: "P. Carroll",
 schedule:
  [
    {
       id: "EN-4111-15",
       title: "Fluid Mechanics",
       daysOfWeek: "1,3,5",
       startTime: "12:00",
       endTime: "12:50",
       room: "HA 205",
    },    {
       id: "EN-3112-16",
       title: "Strength of Materials",
       daysOfWeek: "1,3,5",
       startTime: "13:00",
       endTime: "13:50",
       room: "HA 205",
    },    {
       id: "EN-3112L-41",
       title: "Strength of Materials Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "09:50",
       room: "BR 108",
    },    {
       id: "EN-3211-12",
       title: "Thermodynamics",
       daysOfWeek: "1,3,5",
       startTime: "09:00",
       endTime: "09:50",
       room: "HA 107",
    }
  ]
},
{person: "F. Clifford",
 schedule:
  [
    {
       id: "EN-7144-39",
       title: "Nuclear Power",
       daysOfWeek: "4",
       startTime: "19:00",
       endTime: "21:50",
       room: "HA 109",
    }
  ]
},
{person: "P. Coleman",
 schedule:
  [
    {
       id: "EN-2112L-31",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "3",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 102",
    },    {
       id: "EN-2112L-41",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 102",
    },    {
       id: "EN-2112L-46",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "4",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 102",
    }
  ]
},
{person: "F. Collins",
 schedule:
  [
    {
       id: "EN-2111L-41",
       title: "Aux Machinery II Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 126",
    },    {
       id: "EN-2111L-45",
       title: "Aux Machinery II Lab",
       daysOfWeek: "4",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-2111L-91",
       title: "Aux Machinery II Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 126",
    },    {
       id: "EN-2111L-95",
       title: "Aux Machinery II Lab",
       daysOfWeek: "4",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-2112L-31",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "3",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 102",
    },    {
       id: "EN-2112L-36",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "3",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 102",
    }
  ]
},
{person: "K. Crawford",
 schedule:
  [
    {
       id: "EN-2111L-25",
       title: "Aux Machinery II Lab",
       daysOfWeek: "2",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-2111L-75",
       title: "Aux Machinery II Lab",
       daysOfWeek: "2",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-1112L-46",
       title: "Engineering Systems Lab",
       daysOfWeek: "4",
       startTime: "13:00",
       endTime: "14:50",
       room: "HA ADM",
    },    {
       id: "EN-3131L-21",
       title: "Steam Generators Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 143",
    },    {
       id: "EN-3131L-41",
       title: "Steam Generators Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 143",
    },    {
       id: "EN-3131L-71",
       title: "Steam Generators Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 143",
    },    {
       id: "EN-3131L-91",
       title: "Steam Generators Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 143",
    }
  ]
},
{person: "K. Cruse",
 schedule:
  [
    {
       id: "EN-4131L-21",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 103",
    },    {
       id: "EN-4131L-41",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 103",
    },    {
       id: "EN-4131L-45",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "4",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 103",
    },    {
       id: "EN-4131L-71",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 103",
    },    {
       id: "EN-4131L-91",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 103",
    },    {
       id: "EN-4131L-95",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "4",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 103",
    },    {
       id: "EN-2112L-26",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "2",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 102",
    }
  ]
},
{person: "S. Dannessa",
 schedule:
  [
    {
       id: "EN-1112L-21",
       title: "Engineering Systems Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "09:50",
       room: "HA ADM",
    },    {
       id: "EN-1112L-31",
       title: "Engineering Systems Lab",
       daysOfWeek: "3",
       startTime: "08:00",
       endTime: "09:50",
       room: "HA ADM",
    },    {
       id: "EN-1112L-36",
       title: "Engineering Systems Lab",
       daysOfWeek: "3",
       startTime: "13:00",
       endTime: "14:50",
       room: "HA ADM",
    },    {
       id: "EN-1112-13",
       title: "Engineering Systems and Safety",
       daysOfWeek: "1,3",
       startTime: "10:00",
       endTime: "10:50",
       room: "HA ADM",
    },    {
       id: "EN-1112-24",
       title: "Engineering Systems and Safety",
       daysOfWeek: "2,4",
       startTime: "11:00",
       endTime: "11:50",
       room: "HA ADM",
    },    {
       id: "EN-1112-25",
       title: "Engineering Systems and Safety",
       daysOfWeek: "2,4",
       startTime: "12:00",
       endTime: "12:50",
       room: "HA ADM",
    }
  ]
},
{person: "T. Demoranville",
 schedule:
  [
    {
       id: "EN-2111L-41",
       title: "Aux Machinery II Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 126",
    },    {
       id: "EN-2111L-45",
       title: "Aux Machinery II Lab",
       daysOfWeek: "4",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-2111L-91",
       title: "Aux Machinery II Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 126",
    },    {
       id: "EN-2111L-95",
       title: "Aux Machinery II Lab",
       daysOfWeek: "4",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-3213-11",
       title: "Refrigeration",
       daysOfWeek: "1,3",
       startTime: "08:00",
       endTime: "08:50",
       room: "BR 142",
    },    {
       id: "EN-3213-13",
       title: "Refrigeration",
       daysOfWeek: "1,3",
       startTime: "10:00",
       endTime: "10:50",
       room: "BR 142",
    },    {
       id: "EN-3213-14",
       title: "Refrigeration",
       daysOfWeek: "1,3",
       startTime: "11:00",
       endTime: "11:50",
       room: "BR 142",
    }
  ]
},
{person: "D. DiMassa",
 schedule:
  [
    {
       id: "EN-2901-41",
       title: "Computer Methods in Engineerin",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "09:50",
       room: "BR 221",
    },    {
       id: "EN-2901-44",
       title: "Computer Methods in Engineerin",
       daysOfWeek: "4",
       startTime: "10:00",
       endTime: "11:50",
       room: "BR 221",
    },    {
       id: "EN-3212L-15",
       title: "Electronics Lab",
       daysOfWeek: "1",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 222",
    },    {
       id: "EN-3212L-17",
       title: "Electronics Lab",
       daysOfWeek: "1",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 222",
    },    {
       id: "EN-3212L-45",
       title: "Electronics Lab",
       daysOfWeek: "4",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 222",
    },    {
       id: "EN-3212L-47",
       title: "Electronics Lab",
       daysOfWeek: "4",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 222",
    },    {
       id: "EN-2101-11",
       title: "Engineering Statics",
       daysOfWeek: "1,3,5",
       startTime: "08:00",
       endTime: "08:50",
       room: "HA 109",
    }
  ]
},
{person: "J. Fialkowski",
 schedule:
  [
    {
       id: "EN-1212-25",
       title: "Computer Aided Design",
       daysOfWeek: "2",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 221",
    },    {
       id: "EN-1212-27",
       title: "Computer Aided Design",
       daysOfWeek: "2",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 221",
    }
  ]
},
{person: "E. Fialkowski",
 schedule:
  [
    {
       id: "EN-1212-45",
       title: "Computer Aided Design",
       daysOfWeek: "4",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 221",
    },    {
       id: "EN-1212-47",
       title: "Computer Aided Design",
       daysOfWeek: "4",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 221",
    }
  ]
},
{person: "M. Frain",
 schedule:
  [
    {
       id: "EN-3201-12",
       title: "Fluid Dynamics",
       daysOfWeek: "1,3,5",
       startTime: "09:00",
       endTime: "09:50",
       room: "HA 205",
    },    {
       id: "EN-4112-41",
       title: "Thermo/Fluids Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "09:50",
       room: "BR 141",
    },    {
       id: "EN-4112-43",
       title: "Thermo/Fluids Lab",
       daysOfWeek: "4",
       startTime: "10:00",
       endTime: "11:50",
       room: "BR 141",
    },    {
       id: "EN-3211-15",
       title: "Thermodynamics",
       daysOfWeek: "1,3,5",
       startTime: "12:00",
       endTime: "12:50",
       room: "HA 104",
    }
  ]
},
{person: "R. Gill",
 schedule:
  [
    {
       id: "EN-2111L-21",
       title: "Aux Machinery II Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 126",
    },    {
       id: "EN-2111L-71",
       title: "Aux Machinery II Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 126",
    },    {
       id: "EN-1112L-11",
       title: "Engineering Systems Lab",
       daysOfWeek: "1",
       startTime: "08:00",
       endTime: "09:50",
       room: "HA ADM",
    },    {
       id: "EN-1112L-21",
       title: "Engineering Systems Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "09:50",
       room: "HA ADM",
    },    {
       id: "EN-1112L-26",
       title: "Engineering Systems Lab",
       daysOfWeek: "2",
       startTime: "13:00",
       endTime: "14:50",
       room: "HA ADM",
    },    {
       id: "EN-1112L-31",
       title: "Engineering Systems Lab",
       daysOfWeek: "3",
       startTime: "08:00",
       endTime: "09:50",
       room: "HA ADM",
    },    {
       id: "EN-1112L-36",
       title: "Engineering Systems Lab",
       daysOfWeek: "3",
       startTime: "13:00",
       endTime: "14:50",
       room: "HA ADM",
    },    {
       id: "EN-1112L-41",
       title: "Engineering Systems Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "09:50",
       room: "HA ADM",
    },    {
       id: "EN-1112L-46",
       title: "Engineering Systems Lab",
       daysOfWeek: "4",
       startTime: "13:00",
       endTime: "14:50",
       room: "HA ADM",
    },    {
       id: "EN-1112-14",
       title: "Engineering Systems and Safety",
       daysOfWeek: "1,3",
       startTime: "11:00",
       endTime: "11:50",
       room: "HA ADM",
    },    {
       id: "EN-1112-15",
       title: "Engineering Systems and Safety",
       daysOfWeek: "1,3",
       startTime: "12:00",
       endTime: "12:50",
       room: "HA ADM",
    }
  ]
},
{person: "W. Haynes",
 schedule:
  [
    {
       id: "EN-3111L-27",
       title: "Electrical Machines Lab",
       daysOfWeek: "2",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 212",
    },    {
       id: "EN-3111L-45",
       title: "Electrical Machines Lab",
       daysOfWeek: "4",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 212",
    },    {
       id: "EN-2211-13",
       title: "Mechanics",
       daysOfWeek: "1,3,5",
       startTime: "10:00",
       endTime: "10:50",
       room: "BR 302",
    },    {
       id: "EN-2211-16",
       title: "Mechanics",
       daysOfWeek: "1,3,5",
       startTime: "13:00",
       endTime: "13:50",
       room: "BR 209",
    }
  ]
},
{person: "W. Hibbard",
 schedule:
  [
    {
       id: "EN-3111-11",
       title: "Electrical Machines",
       daysOfWeek: "1,3,5",
       startTime: "08:00",
       endTime: "08:50",
       room: "BR 303",
    },    {
       id: "EN-3111-14",
       title: "Electrical Machines",
       daysOfWeek: "1,3,5",
       startTime: "11:00",
       endTime: "11:50",
       room: "HA 107",
    },    {
       id: "EN-3213-12",
       title: "Refrigeration",
       daysOfWeek: "1,3",
       startTime: "09:00",
       endTime: "09:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-21",
       title: "Refrigeration Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-26",
       title: "Refrigeration Lab",
       daysOfWeek: "2",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-41",
       title: "Refrigeration Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-46",
       title: "Refrigeration Lab",
       daysOfWeek: "4",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-71",
       title: "Refrigeration Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-76",
       title: "Refrigeration Lab",
       daysOfWeek: "2",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-91",
       title: "Refrigeration Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-96",
       title: "Refrigeration Lab",
       daysOfWeek: "4",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 142",
    }
  ]
},
{person: "T. Hibbert",
 schedule:
  [
    {
       id: "EN-2111L-25",
       title: "Aux Machinery II Lab",
       daysOfWeek: "2",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-2111L-75",
       title: "Aux Machinery II Lab",
       daysOfWeek: "2",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-2121-11",
       title: "Aux. Machinery II -Facilities",
       daysOfWeek: "1,3,5",
       startTime: "08:00",
       endTime: "08:50",
       room: "BR 201",
    },    {
       id: "EN-2121-16",
       title: "Aux. Machinery II -Facilities",
       daysOfWeek: "1,3,5",
       startTime: "13:00",
       endTime: "13:50",
       room: "BR 201",
    },    {
       id: "EN-3131-12",
       title: "Steam Generators",
       daysOfWeek: "1,3,5",
       startTime: "09:00",
       endTime: "09:50",
       room: "BR 206",
    },    {
       id: "EN-3131-65",
       title: "Steam Generators",
       daysOfWeek: "1,3,5",
       startTime: "12:00",
       endTime: "12:50",
       room: "BR 206",
    }
  ]
},
{person: "O. Humphrey",
 schedule:
  [
    {
       id: "EN-7142-29",
       title: "Diesel Engines",
       daysOfWeek: "2",
       startTime: "17:00",
       endTime: "19:50",
       room: "BR 209",
    },    {
       id: "EN-3111L-25",
       title: "Electrical Machines Lab",
       daysOfWeek: "2",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 212",
    },    {
       id: "EN-3111L-27",
       title: "Electrical Machines Lab",
       daysOfWeek: "2",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 212",
    },    {
       id: "EN-2112L-11",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "1",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 102",
    },    {
       id: "EN-2112L-36",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "3",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 102",
    }
  ]
},
{person: "M. Hyre",
 schedule:
  [
    {
       id: "EN-4111-11",
       title: "Fluid Mechanics",
       daysOfWeek: "1,3,5",
       startTime: "08:00",
       endTime: "08:50",
       room: "HA 201",
    },    {
       id: "EN-4111-13",
       title: "Fluid Mechanics",
       daysOfWeek: "1,3,5",
       startTime: "10:00",
       endTime: "10:50",
       room: "HA 205",
    },    {
       id: "EN-4111-16",
       title: "Fluid Mechanics",
       daysOfWeek: "1,3,5",
       startTime: "13:00",
       endTime: "13:50",
       room: "BR 302",
    },    {
       id: "EN-7146-15",
       title: "Heat and Mass Transfer",
       daysOfWeek: "1,3,5",
       startTime: "12:00",
       endTime: "12:50",
       room: "BR 302",
    }
  ]
},
{person: "N. Jordan",
 schedule:
  [
    {
       id: "EN-3213L-26",
       title: "Refrigeration Lab",
       daysOfWeek: "2",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-41",
       title: "Refrigeration Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-76",
       title: "Refrigeration Lab",
       daysOfWeek: "2",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-91",
       title: "Refrigeration Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 142",
    },    {
       id: "EN-3213L-96",
       title: "Refrigeration Lab",
       daysOfWeek: "4",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 142",
    }
  ]
},
{person: "K. McClellan",
 schedule:
  [
    {
       id: "EN-2111-21",
       title: "Aux Machinery II",
       daysOfWeek: "2,4",
       startTime: "08:00",
       endTime: "09:15",
       room: "BR 201",
    },    {
       id: "EN-2111-25",
       title: "Aux Machinery II",
       daysOfWeek: "2,4",
       startTime: "12:30",
       endTime: "13:45",
       room: "BR 201",
    },    {
       id: "EN-2111L-35",
       title: "Aux Machinery II Lab",
       daysOfWeek: "3",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-2111L-85",
       title: "Aux Machinery II Lab",
       daysOfWeek: "3",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-2112-51",
       title: "Machine Tool Technology",
       daysOfWeek: "5",
       startTime: "08:00",
       endTime: "08:50",
       room: "HA ADM",
    },    {
       id: "EN-2112-52",
       title: "Machine Tool Technology",
       daysOfWeek: "5",
       startTime: "09:00",
       endTime: "09:50",
       room: "HA ADM",
    },    {
       id: "EN-2112-53",
       title: "Machine Tool Technology",
       daysOfWeek: "5",
       startTime: "10:00",
       endTime: "10:50",
       room: "HA ADM",
    },    {
       id: "EN-2112-54",
       title: "Machine Tool Technology",
       daysOfWeek: "5",
       startTime: "11:00",
       endTime: "11:50",
       room: "HA ADM",
    }
  ]
},
{person: "C. Montanez",
 schedule:
  [
    {
       id: "EN-3111L-17",
       title: "Electrical Machines Lab",
       daysOfWeek: "1",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 212",
    },    {
       id: "EN-3801-24",
       title: "Energy Strategy and Management",
       daysOfWeek: "2,4",
       startTime: "12:30",
       endTime: "13:45",
       room: "BR 209",
    },    {
       id: "EN-4222-22",
       title: "Heating, Vent. & Air-Cond.",
       daysOfWeek: "2,4",
       startTime: "09:30",
       endTime: "10:45",
       room: "BR 301",
    },    {
       id: "EN-4222-25",
       title: "Heating, Vent. & Air-Cond.",
       daysOfWeek: "2,4",
       startTime: "14:00",
       endTime: "15:15",
       room: "BR 301",
    }
  ]
},
{person: "F. Murray",
 schedule:
  [
    {
       id: "EN-4151-12",
       title: "Applied Naval Architecture",
       daysOfWeek: "1,3,5",
       startTime: "09:00",
       endTime: "09:50",
       room: "HA 206",
    },    {
       id: "EN-3102-11",
       title: "System Dynamics and Vibrations",
       daysOfWeek: "1,3,5",
       startTime: "08:00",
       endTime: "08:50",
       room: "HA 206",
    },    {
       id: "EN-4112-37",
       title: "Thermo/Fluids Lab",
       daysOfWeek: "3",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 141",
    },    {
       id: "EN-4112-50",
       title: "Thermo/Fluids Lab",
       daysOfWeek: "4",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 141",
    }
  ]
},
{person: "A. Omran",
 schedule:
  [
    {
       id: "EN-3216-17",
       title: "Operational Controls",
       daysOfWeek: "1,3,5",
       startTime: "14:00",
       endTime: "14:50",
       room: "BR 303",
    },    {
       id: "EN-3112-13",
       title: "Strength of Materials",
       daysOfWeek: "1,3,5",
       startTime: "10:00",
       endTime: "10:50",
       room: "HA 104",
    },    {
       id: "EN-3112L-23",
       title: "Strength of Materials Lab",
       daysOfWeek: "2",
       startTime: "10:00",
       endTime: "11:50",
       room: "BR 108",
    },    {
       id: "EN-3112L-25",
       title: "Strength of Materials Lab",
       daysOfWeek: "2",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 108",
    },    {
       id: "EN-3112L-27",
       title: "Strength of Materials Lab",
       daysOfWeek: "2",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 108",
    }
  ]
},
{person: "W. Rezendes",
 schedule:
  [
    {
       id: "EN-7214-39",
       title: "Industrial Wastewater",
       daysOfWeek: "3",
       startTime: "19:00",
       endTime: "21:50",
       room: "HA 106",
    }
  ]
},
{person: "G. Russell",
 schedule:
  [
    {
       id: "EN-3212-11",
       title: "Electronics",
       daysOfWeek: "1,3,5",
       startTime: "08:00",
       endTime: "08:50",
       room: "BR 222",
    },    {
       id: "EN-3212-12",
       title: "Electronics",
       daysOfWeek: "1,3,5",
       startTime: "09:00",
       endTime: "09:50",
       room: "BR 222",
    },    {
       id: "EN-3212L-41",
       title: "Electronics Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "09:50",
       room: "BR 222",
    },    {
       id: "EN-3212L-43",
       title: "Electronics Lab",
       daysOfWeek: "4",
       startTime: "10:00",
       endTime: "11:50",
       room: "BR 222",
    }
  ]
},
{person: "J. Shepard",
 schedule:
  [
    {
       id: "EN-2112L-21",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 102",
    },    {
       id: "EN-2112L-41",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 102",
    },    {
       id: "EN-3131L-26",
       title: "Steam Generators Lab",
       daysOfWeek: "2",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 143",
    },    {
       id: "EN-3131L-45",
       title: "Steam Generators Lab",
       daysOfWeek: "4",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 143",
    },    {
       id: "EN-3131L-76",
       title: "Steam Generators Lab",
       daysOfWeek: "2",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 143",
    },    {
       id: "EN-3131L-95",
       title: "Steam Generators Lab",
       daysOfWeek: "4",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 143",
    }
  ]
},
{person: "D. Splaine",
 schedule:
  [
    {
       id: "EN-4131L-41",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 103",
    },    {
       id: "EN-4131L-45",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "4",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 103",
    },    {
       id: "EN-4131L-91",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 103",
    },    {
       id: "EN-4131L-95",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "4",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 103",
    },    {
       id: "EN-4131-17",
       title: "Internal Combustion Engines II",
       daysOfWeek: "1,3,5",
       startTime: "14:00",
       endTime: "14:50",
       room: "BR 209",
    },    {
       id: "EN-3214-18",
       title: "Municipal Wastewater",
       daysOfWeek: "1,3,5",
       startTime: "15:00",
       endTime: "15:50",
       room: "BR 305",
    }
  ]
},
{person: "G. Stephens",
 schedule:
  [
    {
       id: "EN-4224-16",
       title: "Facilities Planning & Mgmt.",
       daysOfWeek: "1,3,5",
       startTime: "13:00",
       endTime: "13:50",
       room: "HA 304",
    },    {
       id: "EN-3112-12",
       title: "Strength of Materials",
       daysOfWeek: "1,3,5",
       startTime: "09:00",
       endTime: "09:50",
       room: "HA 203",
    },    {
       id: "EN-3112L-21",
       title: "Strength of Materials Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "09:50",
       room: "BR 108",
    },    {
       id: "EN-3112L-23",
       title: "Strength of Materials Lab",
       daysOfWeek: "2",
       startTime: "10:00",
       endTime: "11:50",
       room: "BR 108",
    }
  ]
},
{person: "A. Torino",
 schedule:
  [
    {
       id: "EN-4121-11",
       title: "Elec. Power Distribution",
       daysOfWeek: "1,3,5",
       startTime: "08:00",
       endTime: "08:50",
       room: "HA 107",
    },    {
       id: "EN-4121-16",
       title: "Elec. Power Distribution",
       daysOfWeek: "1,3,5",
       startTime: "13:00",
       endTime: "13:50",
       room: "HA 202A",
    }
  ]
},
{person: "D. Trudeau",
 schedule:
  [
    {
       id: "EN-4131L-21",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 103",
    },    {
       id: "EN-4131L-71",
       title: "Int. Comb. Engines II Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 103",
    },    {
       id: "EN-4131-13",
       title: "Internal Combustion Engines II",
       daysOfWeek: "1,3,5",
       startTime: "10:00",
       endTime: "10:50",
       room: "BR 209",
    },    {
       id: "EN-4131-15",
       title: "Internal Combustion Engines II",
       daysOfWeek: "1,3,5",
       startTime: "12:00",
       endTime: "12:50",
       room: "BR 209",
    },    {
       id: "EN-4232-36",
       title: "License Seminar",
       daysOfWeek: "3",
       startTime: "13:00",
       endTime: "15:50",
       room: "HA 307",
    },    {
       id: "EN-3131L-26",
       title: "Steam Generators Lab",
       daysOfWeek: "2",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 143",
    },    {
       id: "EN-3131L-76",
       title: "Steam Generators Lab",
       daysOfWeek: "2",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 143",
    }
  ]
},
{person: "M. Weir",
 schedule:
  [
    {
       id: "EN-2111L-15",
       title: "Aux Machinery II Lab",
       daysOfWeek: "1",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-2111L-21",
       title: "Aux Machinery II Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "11:50",
       room: "BR 126",
    },    {
       id: "EN-2111L-65",
       title: "Aux Machinery II Lab",
       daysOfWeek: "1",
       startTime: "12:30",
       endTime: "16:20",
       room: "BR 126",
    },    {
       id: "EN-2112L-46",
       title: "Machine Tool Tech/Welding Lab",
       daysOfWeek: "4",
       startTime: "13:00",
       endTime: "15:50",
       room: "BR 102",
    }
  ]
},
{person: "M. Whalen",
 schedule:
  [
    {
       id: "EN-4704-37",
       title: "Energy Systems Design I",
       daysOfWeek: "3",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 301",
    },    {
       id: "EN-4704-37",
       title: "Energy Systems Design I",
       daysOfWeek: "5",
       startTime: "14:00",
       endTime: "14:50",
       room: "HA 204",
    },    {
       id: "EN-2701L-41",
       title: "Intro to Design Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "HA 205",
    },    {
       id: "EN-2701L-41",
       title: "Intro to Design Lab",
       daysOfWeek: "4",
       startTime: "08:00",
       endTime: "10:50",
       room: "KP LAB",
    },    {
       id: "EN-2701-44",
       title: "Introduction to Design",
       daysOfWeek: "4",
       startTime: "11:00",
       endTime: "11:50",
       room: "BR 302",
    },    {
       id: "EN-4112-21",
       title: "Thermo/Fluids Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "09:50",
       room: "BR 141",
    },    {
       id: "EN-4112-25",
       title: "Thermo/Fluids Lab",
       daysOfWeek: "2",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 141",
    },    {
       id: "EN-4112-27",
       title: "Thermo/Fluids Lab",
       daysOfWeek: "2",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 141",
    }
  ]
},
{person: "L. Wilcox",
 schedule:
  [
    {
       id: "EN-2111-12",
       title: "Aux Machinery II",
       daysOfWeek: "1,3,5",
       startTime: "09:00",
       endTime: "09:50",
       room: "BR 201",
    },    {
       id: "EN-7142-29",
       title: "Diesel Engines",
       daysOfWeek: "2",
       startTime: "17:00",
       endTime: "19:50",
       room: "BR 209",
    },    {
       id: "EN-3111L-17",
       title: "Electrical Machines Lab",
       daysOfWeek: "1",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 212",
    },    {
       id: "EN-3111L-25",
       title: "Electrical Machines Lab",
       daysOfWeek: "2",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 212",
    },    {
       id: "EN-3131L-21",
       title: "Steam Generators Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 143",
    },    {
       id: "EN-3131L-71",
       title: "Steam Generators Lab",
       daysOfWeek: "2",
       startTime: "08:00",
       endTime: "10:50",
       room: "BR 143",
    }
  ]
},
{person: "W. Yu",
 schedule:
  [
    {
       id: "EN-3212-13",
       title: "Electronics",
       daysOfWeek: "1,3,5",
       startTime: "10:00",
       endTime: "10:50",
       room: "BR 222",
    },    {
       id: "EN-3112-14",
       title: "Strength of Materials",
       daysOfWeek: "1,3,5",
       startTime: "11:00",
       endTime: "11:50",
       room: "HA 108",
    },    {
       id: "EN-3112L-45",
       title: "Strength of Materials Lab",
       daysOfWeek: "4",
       startTime: "12:00",
       endTime: "13:50",
       room: "BR 108",
    },    {
       id: "EN-3112L-47",
       title: "Strength of Materials Lab",
       daysOfWeek: "4",
       startTime: "14:00",
       endTime: "15:50",
       room: "BR 108",
    }
  ]
}]



function addDiv(info){
var member = info["person"];
var classes = info['schedule']

document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('div');
    div.id = member;
    div.className = 'cal';

let calendar = new Calendar(div, {

// format the cell contents
eventContent: function(info) {
  var text =  info.event.title + '<br>' + info.event.extendedProps.room;
  return { html: text}
},

  plugins: [timeGridPlugin],
  initialDate:  "2022-02-28",
  initialView: 'timeGridWeek',
  headerToolbar: {
    left: '',
    center: '',
    right: ''
  },
  dayHeaderFormat: {
      weekday: 'short',
  },
  slotMinTime: "08:00:00",
  slotMaxTime: "18:00:00",
  allDaySlot: false,
  weekends: false,
  height: "auto",
  eventColor: '#ddd',
  eventTextColor: '#000',
  events: classes
});

  document.body.appendChild(div);
  calendar.render();
  calendar.el.firstChild.children[1].innerHTML = member;


}, false);}

 data.forEach(schedule => addDiv(schedule));


