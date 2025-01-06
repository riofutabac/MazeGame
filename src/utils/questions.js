export const questions = {
  easy: [
    {
      question: "¿Cuál es el planeta más grande del Sistema Solar?",
      answers: [
        { 
          text: "Júpiter", 
          correct: true,
          description: "Júpiter es el planeta más grande del Sistema Solar, con un diámetro de 142,984 km. Es tan grande que podrían caber más de 1,300 Tierras dentro de él."
        },
        { 
          text: "Marte", 
          correct: false,
          description: "Marte es mucho más pequeño que Júpiter, con un diámetro de solo 6,792 km, siendo aproximadamente la mitad del tamaño de la Tierra."
        },
        { 
          text: "Venus", 
          correct: false,
          description: "Venus tiene un tamaño similar a la Tierra, con un diámetro de 12,104 km, siendo mucho más pequeño que Júpiter."
        },
      ],
    },
    {
      question: "¿Cuál es el planeta más cercano al Sol?",
      answers: [
        { 
          text: "Mercurio", 
          correct: true,
          description: "Mercurio es el planeta más cercano al Sol, orbitándolo a una distancia promedio de 57.91 millones de kilómetros."
        },
        { 
          text: "Venus", 
          correct: false,
          description: "Venus es el segundo planeta más cercano al Sol, con una órbita a una distancia promedio de 108.2 millones de kilómetros."
        },
        { 
          text: "Tierra", 
          correct: false,
          description: "La Tierra es el tercer planeta más cercano al Sol, orbitándolo a una distancia promedio de 149.6 millones de kilómetros."
        },
      ],
    },
    {
      question: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
      answers: [
        { 
          text: "Marte", 
          correct: true,
          description: "Marte es conocido como el 'Planeta Rojo' debido al óxido de hierro en su superficie, que le da un color rojizo."
        },
        { 
          text: "Saturno", 
          correct: false,
          description: "Saturno no es conocido como el 'Planeta Rojo', sino por sus icónicos anillos compuestos principalmente de hielo y roca."
        },
        { 
          text: "Urano", 
          correct: false,
          description: "Urano es un gigante gaseoso con un tono azul verdoso debido al metano en su atmósfera, no tiene una relación con el color rojo."
        },
      ],
    },
    {
      question: "¿Cuál es el único planeta habitado conocido?",
      answers: [
        { 
          text: "Tierra", 
          correct: true,
          description: "La Tierra es el único planeta conocido en el Sistema Solar que alberga vida, gracias a su atmósfera y agua líquida."
        },
        { 
          text: "Marte", 
          correct: false,
          description: "Aunque Marte es un foco de exploración para buscar signos de vida pasada, no se ha encontrado vida en su superficie."
        },
        { 
          text: "Venus", 
          correct: false,
          description: "Venus tiene condiciones extremadamente hostiles, con temperaturas superficiales y presiones aplastantes que hacen imposible la vida como la conocemos."
        },
      ],
    },
  ],
  medium: [
    {
      question: "¿Qué planeta tiene un sistema de anillos prominente?",
      answers: [
        { 
          text: "Saturno", 
          correct: true,
          description: "Saturno es famoso por sus espectaculares anillos, compuestos principalmente de partículas de hielo, roca y polvo."
        },
        { 
          text: "Júpiter", 
          correct: false,
          description: "Júpiter tiene un sistema de anillos, pero son mucho más tenues y menos destacados que los de Saturno."
        },
        { 
          text: "Urano", 
          correct: false,
          description: "Urano también tiene anillos, pero son oscuros y difíciles de observar en comparación con los de Saturno."
        },
      ],
    },
    {
      question: "¿Qué planeta tiene la mayor cantidad de lunas conocidas?",
      answers: [
        { 
          text: "Saturno", 
          correct: true,
          description: "Saturno tiene la mayor cantidad de lunas conocidas, con más de 80 lunas confirmadas hasta la fecha."
        },
        { 
          text: "Júpiter", 
          correct: false,
          description: "Júpiter tiene un número significativo de lunas, más de 70, pero menos que Saturno."
        },
        { 
          text: "Neptuno", 
          correct: false,
          description: "Neptuno tiene un número mucho menor de lunas conocidas, con solo 14 descubiertas hasta ahora."
        },
      ],
    },
    {
      question: "¿Qué planeta tiene un día más largo que su año?",
      answers: [
        { 
          text: "Venus", 
          correct: true,
          description: "Venus tiene un día más largo que su año debido a su rotación extremadamente lenta, que toma 243 días terrestres."
        },
        { 
          text: "Mercurio", 
          correct: false,
          description: "Aunque Mercurio tiene una rotación lenta, su día es más corto que su año debido a su órbita rápida alrededor del Sol."
        },
        { 
          text: "Urano", 
          correct: false,
          description: "Urano tiene un día más corto que su año, con una rotación que dura aproximadamente 17 horas terrestres."
        },
      ],
    },
    {
      question: "¿Qué planeta tiene la Gran Mancha Roja?",
      answers: [
        { 
          text: "Júpiter", 
          correct: true,
          description: "La Gran Mancha Roja de Júpiter es una tormenta gigantesca que ha existido durante siglos y es más grande que la Tierra."
        },
        { 
          text: "Saturno", 
          correct: false,
          description: "Saturno no tiene una Gran Mancha Roja, aunque sí tiene tormentas y patrones climáticos interesantes."
        },
        { 
          text: "Neptuno", 
          correct: false,
          description: "Neptuno tiene una Gran Mancha Oscura, que es una tormenta, pero no es similar a la Gran Mancha Roja de Júpiter."
        },
      ],
    },
  ],
  hard: [
    {
      question: "¿Qué planeta tiene los vientos más rápidos del Sistema Solar?",
      answers: [
        { 
          text: "Neptuno", 
          correct: true,
          description: "Neptuno tiene los vientos más rápidos del Sistema Solar, alcanzando velocidades de más de 2,000 km/h."
        },
        { 
          text: "Urano", 
          correct: false,
          description: "Urano tiene vientos intensos, pero no son tan rápidos como los de Neptuno."
        },
        { 
          text: "Saturno", 
          correct: false,
          description: "Saturno tiene fuertes vientos, pero su velocidad máxima es menor en comparación con Neptuno."
        },
      ],
    },
    {
      question: "¿Qué planeta tiene un eje de rotación inclinado casi 90 grados?",
      answers: [
        { 
          text: "Urano", 
          correct: true,
          description: "Urano está inclinado casi 90 grados, lo que significa que gira casi de lado en comparación con los demás planetas."
        },
        { 
          text: "Neptuno", 
          correct: false,
          description: "Neptuno tiene una inclinación axial moderada de aproximadamente 28 grados."
        },
        { 
          text: "Saturno", 
          correct: false,
          description: "Saturno tiene una inclinación axial de 26.7 grados, mucho menor que la de Urano."
        },
      ],
    },
    {
      question: "¿Qué planeta tiene la luna más grande del Sistema Solar?",
      answers: [
        { 
          text: "Júpiter", 
          correct: true,
          description: "Júpiter tiene la luna más grande del Sistema Solar, Ganímedes, que es incluso más grande que Mercurio."
        },
        { 
          text: "Saturno", 
          correct: false,
          description: "Saturno tiene grandes lunas como Titán, pero ninguna tan grande como Ganímedes de Júpiter."
        },
        { 
          text: "Tierra", 
          correct: false,
          description: "La Luna de la Tierra es grande en relación con su planeta, pero es más pequeña que Ganímedes."
        },
      ],
    },
    {
      question: "¿Qué planeta tiene la temperatura más alta en su superficie?",
      answers: [
        { 
          text: "Venus", 
          correct: true,
          description: "Venus tiene la temperatura más alta debido a su densa atmósfera de dióxido de carbono y su efecto invernadero extremo."
        },
        { 
          text: "Mercurio", 
          correct: false,
          description: "Aunque Mercurio está más cerca del Sol, no tiene una atmósfera para retener el calor, por lo que no es tan caliente como Venus."
        },
        { 
          text: "Marte", 
          correct: false,
          description: "Marte es mucho más frío que Venus, con temperaturas superficiales promedio muy por debajo del punto de congelación del agua."
        },
      ],
    },
  ],
};
