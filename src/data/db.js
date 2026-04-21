export const TEORIA_SECTIONS = [
  {
    id: "fundamentos",
    titulo: "1. Fundamentos y Variables",
    contenido: `Según el material, una variable es una secuencia de caracteres que sirve para identificar una posición en la memoria.

**Reglas para los Identificadores (Variables):**
1. **Regla 1**: Debe comenzar obligatoriamente con una letra (A a Z, mayúsculas o minúsculas).
2. **Regla 2**: NO deben contener espacios en blanco.
3. **Regla 3**: Se permiten números y el carácter de subrayado (_) siempre y cuando no sean el primer carácter (Ej. válido: num_hrs, calif2).`,
    interactivo: "DataTypeInteractive"
  },
  {
    id: "reglas",
    titulo: "2. Reglas del Algoritmo PSeInt",
    contenido: `**Las 6 Reglas de Escritura:**
1. Todas las instrucciones deberán ser escritas en mayúsculas y en letra imprenta.
2. Si existen varias instrucciones en una misma línea deberán ser separadas por comas.
3. Todo algoritmo deberá empezar con la palabra \`INICIO\` y terminar con la instrucción \`FIN\`.
4. En la instrucción de entrada/salida (variables que se leen o se imprimen), deben ir encerradas en paréntesis y separadas por comas.
5. Las constantes alfanuméricas deben ir encerradas por apóstrofes (simples o dobles).
6. Para señalar la asignación de valores de cálculos se usará la flecha \`<-\` (dirigida hacia la izquierda).`,
    interactivo: null
  },
  {
    id: "operadores",
    titulo: "3. Expresiones, Operadores y Jerarquía",
    contenido: `Las expresiones son combinaciones de constantes, variables, símbolos de operación, paréntesis y nombres de funciones especiales.

**Jerarquía de Operaciones:**
El orden estricto en que PSeInt resuelve las matemáticas:
1. Paréntesis \`( )\` (Tienen la máxima prioridad).
2. Exponenciación \`**\` (o \`^\`).
3. Multiplicación \`*\`, División \`/\`, \`mod\` y \`TRUNC\`.
4. Suma \`+\` y Resta \`-\`.

**Tipos de Operadores:**
- **Aritméticos:** \`**\` (exponenciación), \`*\` (multiplicación), \`/\` (división), \`+\`, \`-\`, \`mod\` (residuo).
- **Relacionales:** Permiten realizar comparaciones. \`=\` (igualdad), \`<\` (menor), \`>\` (mayor), \`<=\` (menor o igual), \`>=\` (mayor o igual), \`<>\` (distinto de).
- **Lógicos:** \`AND\` (verdad si ambas son verdaderas), \`OR\` (verdad si al menos una es verdadera), \`NOT\` (invierte la condición).`,
    interactivo: "ModTruncCalculator"
  },
  {
    id: "condicionales",
    titulo: "4. Condicionales Simples y Dobles",
    contenido: `La estructura SI (condición) ENTONCES ... SINO ... FINSI evalúa una expresión lógica y ejecuta un bloque de código diferente dependiendo de si el resultado es verdadero o falso.`,
    interactivo: "ConditionalToggle"
  },
  {
    id: "ciclos",
    titulo: "5. Ciclos Repetitivos",
    contenido: `Las estructuras repetitivas permiten ejecutar un bloque de código varias veces. Existen dos tipos de variables importantes:
- **Contador**: Se incrementa de forma constante (\`C <- C + 1\`).
- **Acumulador**: Suma valores variables (\`Suma <- Suma + Valor\`).

**Tipos de Ciclos:**
- **MIENTRAS**: Evalúa la condición ANTES de entrar. Puede no ejecutarse nunca.
- **REPETIR... HASTA QUE**: Ejecuta el bloque al menos una vez, evalúa al final.
- **PARA**: Tiene su propio contador incorporado con un inicio, límite e incremento definidos.`,
    interactivo: "LoopSimulator"
  }
];

export const QUIZZES = [
  {
    enunciado: '¿Cuáles son las reglas correctas para nombrar un identificador (variable) en PSeInt?',
    opciones: [
      { texto: 'Puede empezar con números o letras y no tener espacios.', esCorrecta: false, explicacion: 'Falso. Una variable NUNCA puede empezar con un número.' },
      { texto: 'Debe empezar con letra y no poseer espacios en blanco.', esCorrecta: true, explicacion: 'Correcto. Además puede tener números y _, pero no al inicio.' }
    ]
  },
  {
    enunciado: 'Según la jerarquía de operaciones de PSeInt, en la expresión: (2 + 3) * 2 ^ 2 / TRUNC(4.8), ¿qué se resuelve primero?',
    opciones: [
      { texto: '2 ^ 2', esCorrecta: false, explicacion: 'Los paréntesis (2 + 3) tienen la prioridad máxima absoluta.' },
      { texto: '(2 + 3)', esCorrecta: true, explicacion: 'Correcto. Los paréntesis se resuelven antes que las potencias y las multiplicaciones.' }
    ]
  },
  {
    enunciado: 'Si tienes 15 MOD 4, ¿cuál es el resultado?',
    opciones: [
      { texto: '3', esCorrecta: true, explicacion: 'Exacto. 15 / 4 es 3, con un sobrante (residuo) de 3.' },
      { texto: '3.75', esCorrecta: false, explicacion: 'MOD no devuelve divisiones con decimales, solo el residuo.' }
    ]
  },
  {
    enunciado: 'En formato militar de hora (Ej. 1430), ¿cómo extraes matemáticamente los MINUTOS usando PSeInt?',
    opciones: [
      { texto: 'hora MOD 100', esCorrecta: true, explicacion: 'Correcto. Al dividir entre 100, el residuo (últimos dos dígitos) representan los minutos.' },
      { texto: 'TRUNC(hora / 100)', esCorrecta: false, explicacion: 'TRUNC(hora/100) te extraería las HORAS al quitarle los decimales (14).' }
    ]
  },
  {
    enunciado: '¿Qué es una variable contador en un ciclo repetitivo?',
    opciones: [
      { texto: 'Una variable que suma valores dinámicos (Ej. suma <- suma + sueldo).', esCorrecta: false, explicacion: 'Esa es la definición de una variable ACUMULADORA.' },
      { texto: 'Una variable que se incrementa o decrementa en un valor constante (Ej. C <- C + 1).', esCorrecta: true, explicacion: 'Correcto, sirve típicamente para llevar cuenta de iteraciones.' }
    ]
  },
  {
    enunciado: 'Diferencia fundamental entre el ciclo MIENTRAS y el ciclo REPETIR:',
    opciones: [
      { texto: 'El MIENTRAS evalúa la condición al final, y REPETIR al principio.', esCorrecta: false, explicacion: 'Es exactamente al revés.' },
      { texto: 'REPETIR ejecuta el bloque de código al menos una vez ANTES de evaluar la condición.', esCorrecta: true, explicacion: 'Exacto, por lo que es ideal para pedir contraseñas o menús donde la iteración inicial es forzosa.' }
    ]
  }
];

export const PRACTICAS = [
  {
    modulo: 'Práctica 2: Secuencias',
    problemas: [
      {
        titulo: 'Arroz con Pollo',
        enunciado: 'Para 4 personas se usa 0.5kg de arroz y 0.25kg de pollo. Pedir cantidad de personas, precio por kilo y mostrar cantidades y costo total.',
        eps: { 
          entradas: ['n_personas', 'p_arroz', 'p_pollo'], 
          proceso: ['kg_arroz <- (n_personas / 4) * 0.5', 'kg_pollo <- (n_personas / 4) * 0.25', 'costo_total <- (kg_arroz * p_arroz) + (kg_pollo * p_pollo)'], 
          salidas: ['kg_arroz', 'kg_pollo', 'costo_total'] 
        },
        codigo: `Algoritmo Arroz_Con_Pollo
    Definir n_personas Como Entero;
    Definir p_arroz, p_pollo, kg_arroz, kg_pollo, costo_total Como Real;
    
    Escribir "Ingrese cantidad de personas que comerán:";
    Leer n_personas;
    Escribir "Ingrese precio del kilo de arroz y precio del kilo de pollo:";
    Leer p_arroz, p_pollo;
    
    // Proceso
    kg_arroz <- (n_personas / 4) * 0.5;
    kg_pollo <- (n_personas / 4) * 0.25;
    costo_total <- (kg_arroz * p_arroz) + (kg_pollo * p_pollo);
    
    // Salida
    Escribir "Kilos de arroz necesarios: ", kg_arroz;
    Escribir "Kilos de pollo necesarios: ", kg_pollo;
    Escribir "El costo total de los ingredientes es: B/. ", costo_total;
FinAlgoritmo`
      },
      {
        titulo: 'Descuento en Librería',
        enunciado: 'Libro cuesta 0.20 por página. Descuento escolar del 7%. Obtener costo original y pago final al ver páginas.',
        eps: { 
          entradas: ['paginas'], 
          proceso: ['costo_original <- paginas * 0.20', 'descuento <- costo_original * 0.07', 'pago_final <- costo_original - descuento'], 
          salidas: ['costo_original', 'descuento', 'pago_final'] 
        },
        codigo: `Algoritmo Descuento_Libreria
    Definir paginas Como Entero;
    Definir costo_original, descuento, pago_final Como Real;
    
    Escribir "Ingrese la cantidad de páginas del libro:";
    Leer paginas;
    
    costo_original <- paginas * 0.20;
    descuento <- costo_original * 0.07;
    pago_final <- costo_original - descuento;
    
    Escribir "Costo Original: B/. ", costo_original;
    Escribir "Descuento aplicado: B/. ", descuento;
    Escribir "Pago Total del Cliente: B/. ", pago_final;
FinAlgoritmo`
      },
      {
        titulo: 'Salario de un Trabajador',
        enunciado: 'Dadas las horas trabajadas y el valor por hora, calcular e imprimir el salario.',
        eps: { 
          entradas: ['horas', 'valor_hora'], 
          proceso: ['salario <- horas * valor_hora'], 
          salidas: ['salario'] 
        },
        codigo: `Algoritmo Salario_Trabajador
    Definir horas, valor_hora, salario Como Real;
    
    Escribir "Ingrese las horas trabajadas y el valor por hora:";
    Leer horas, valor_hora;
    
    salario <- horas * valor_hora;
    
    Escribir "El salario a pagar es: B/. ", salario;
FinAlgoritmo`
      },
      {
        titulo: 'Consumo de Fruta',
        enunciado: 'Una persona consume 8kg de fruta por año de vida. Dada la edad, ¿cuántos gramos ha consumido?',
        eps: { 
          entradas: ['edad'], 
          proceso: ['kg_fruta <- edad * 8', 'gramos_fruta <- kg_fruta * 1000'], 
          salidas: ['gramos_fruta'] 
        },
        codigo: `Algoritmo Consumo_Frutas
    Definir edad Como Entero;
    Definir kg_fruta, gramos_fruta Como Real;
    
    Escribir "Ingrese la edad de la persona:";
    Leer edad;
    
    kg_fruta <- edad * 8;
    gramos_fruta <- kg_fruta * 1000;
    
    Escribir "A lo largo de su vida ha consumido ", gramos_fruta, " gramos de fruta.";
FinAlgoritmo`
      },
      {
        titulo: 'Formato de Fecha',
        enunciado: 'Dados 3 enteros (día, mes, año), muestre la fecha en string: (día/mes/año).',
        eps: { 
          entradas: ['dia', 'mes', 'anio'], 
          proceso: ['N/A (Concatenación directa en salida)'], 
          salidas: ['"fecha formateada: " + dia + "/" + mes + "/" + anio'] 
        },
        codigo: `Algoritmo Formato_Fecha
    Definir dia, mes, anio Como Entero;
    
    Escribir "Ingrese el día, luego el mes y luego el año en números:";
    Leer dia, mes, anio;
    
    Escribir "La fecha formateada es: ", dia, "/", mes, "/", anio;
FinAlgoritmo`
      },
      {
        titulo: 'La Gasolinera',
        enunciado: 'Surtidores en galones, precio en litros. 1 galón = 3.785 litros. Precio = B/. 3.50/litro.',
        eps: { 
          entradas: ['galones'], 
          proceso: ['litros <- galones * 3.785', 'cobro <- litros * 3.50'], 
          salidas: ['cobro'] 
        },
        codigo: `Algoritmo Cobro_Gasolinera
    Definir galones, litros, cobro Como Real;
    
    Escribir "Ingrese la cantidad de galones surtidos:";
    Leer galones;
    
    litros <- galones * 3.785;
    cobro <- litros * 3.50;
    
    Escribir "El monto total a cobrar al cliente es: B/. ", cobro;
FinAlgoritmo`
      }
    ]
  },
  {
    modulo: 'Práctica 3: Condicionales Simples y Dobles',
    problemas: [
      {
        titulo: 'Pago del Cine',
        enunciado: 'Grupo < 8 paga B/. 1.5 por persona. Grupo >= 8 paga B/. 0.5 por persona.',
        eps: { 
          entradas: ['personas'], 
          proceso: ['Si personas < 8 Entonces pago <- personas * 1.5', 'Sino pago <- personas * 0.5'], 
          salidas: ['pago_total'] 
        },
        codigo: `Algoritmo Pago_Cine
    Definir personas Como Entero;
    Definir pago_total Como Real;
    
    Escribir "Ingrese la cantidad de personas del grupo:";
    Leer personas;
    
    Si personas < 8 Entonces
        pago_total <- personas * 1.5;
    Sino
        pago_total <- personas * 0.5;
    FinSi
    
    Escribir "El grupo debe pagar un total de: B/. ", pago_total;
FinAlgoritmo`
      },
      {
        titulo: 'Matrícula Postgrado UTP',
        enunciado: 'Egresados UTP ("E") pagan B/. 30 por curso. Otros pagan B/. 50. Todos pagan cuota fija de B/. 30.',
        eps: { 
          entradas: ['tipo_egresado', 'n_cursos'], 
          proceso: ['Si tipo="E" costo <- n_cursos * 30 Sino costo <- n_cursos * 50', 'pago <- costo + 30 fijos'], 
          salidas: ['pago_total'] 
        },
        codigo: `Algoritmo Matricula_Postgrado_UTP
    Definir tipo_egresado Como Caracter;
    Definir n_cursos Como Entero;
    Definir costo_cursos, pago_total Como Real;
    
    Escribir "Ingrese 'E' si es egresado de UTP, o 'N' si es de otra universidad:";
    Leer tipo_egresado;
    Escribir "Ingrese la cantidad de cursos a matricular:";
    Leer n_cursos;
    
    Si tipo_egresado = "E" o tipo_egresado = "e" Entonces
        costo_cursos <- n_cursos * 30;
    Sino
        costo_cursos <- n_cursos * 50;
    FinSi
    
    pago_total <- costo_cursos + 30;
    
    Escribir "El pago total de matrícula es: B/. ", pago_total;
FinAlgoritmo`
      },
      {
        titulo: 'Salario con Horas Extras',
        enunciado: 'Si horas > 40, la tarifa de las horas extras (las que pasen de 40) incrementa un 50%.',
        eps: { 
          entradas: ['horas', 'tarifa'], 
          proceso: ['Si horas > 40 extras <- horas - 40, calcular pago_extra, sumar 40*tarifa', 'Sino salario <- horas * tarifa'], 
          salidas: ['salario_total'] 
        },
        codigo: `Algoritmo Salario_Horas_Extras
    Definir horas, tarifa, horas_extras, pago_base, pago_extra, salario_total Como Real;
    
    Escribir "Ingrese horas trabajadas y la tarifa base por hora:";
    Leer horas, tarifa;
    
    Si horas > 40 Entonces
        horas_extras <- horas - 40;
        pago_base <- 40 * tarifa;
        pago_extra <- horas_extras * (tarifa * 1.5);
        salario_total <- pago_base + pago_extra;
    Sino
        salario_total <- horas * tarifa;
    FinSi
    
    Escribir "El salario total a pagar es: B/. ", salario_total;
FinAlgoritmo`
      },
      {
        titulo: 'Cobro de Electricidad',
        enunciado: 'Primeros 50 kw a 0.08. El resto a 0.06.',
        eps: { 
          entradas: ['kw_consumidos'], 
          proceso: ['Si kw <= 50 -> monto <- kw * 0.08', 'Sino -> extras <- kw - 50, monto <- (50*0.08) + (extras*0.06)'], 
          salidas: ['monto_pagar'] 
        },
        codigo: `Algoritmo Cobro_Electricidad
    Definir kw_consumidos, kw_extra, monto_pagar Como Real;
    
    Escribir "Ingrese la cantidad de Kilovatios (KW) consumidos:";
    Leer kw_consumidos;
    
    Si kw_consumidos <= 50 Entonces
        monto_pagar <- kw_consumidos * 0.08;
    Sino
        kw_extra <- kw_consumidos - 50;
        monto_pagar <- (50 * 0.08) + (kw_extra * 0.06);
    FinSi
    
    Escribir "Monto a pagar por electricidad: B/. ", monto_pagar;
FinAlgoritmo`
      },
      {
        titulo: 'Estacionamiento (Formato Militar)',
        enunciado: 'Manejo de HORAS formateadas usando TRUNC y MOD. 1ra hora B/. 2.00, resto B/. 2.50.',
        eps: { 
          entradas: ['h_entrada', 'h_salida'], 
          proceso: ['Extraer minutos (MOD) y horas (TRUNC)', 'Restar', 'Cobrar primera hora 2.00 y 2.50 el resto'], 
          salidas: ['horas_cobradas', 'monto_pagar'] 
        },
        codigo: `Algoritmo Cobro_Estacionamiento_Militar
    Definir h_entrada, h_salida Como Entero;
    Definir min_entrada, min_salida, min_totales, horas_cobradas Como Entero;
    Definir monto_pagar Como Real;
    
    Escribir "Ingrese la hora de entrada y salida en formato militar (Ej: 1430):";
    Leer h_entrada, h_salida;
    
    // 1. Extraemos horas (TRUNC) y minutos (MOD), y pasamos todo a minutos totales
    min_entrada <- (TRUNC(h_entrada / 100) * 60) + (h_entrada MOD 100);
    min_salida <- (TRUNC(h_salida / 100) * 60) + (h_salida MOD 100);
    
    // 2. Calculamos la diferencia en minutos
    min_totales <- min_salida - min_entrada;
    
    // 3. Calculamos las horas a cobrar. Si sobra un minuto, se cobra la hora entera.
    Si min_totales MOD 60 = 0 Entonces
        horas_cobradas <- TRUNC(min_totales / 60);
    Sino
        horas_cobradas <- TRUNC(min_totales / 60) + 1;
    FinSi
    
    // 4. Calculamos la tarifa final
    Si horas_cobradas = 1 Entonces
        monto_pagar <- 2.00;
    Sino
        monto_pagar <- 2.00 + ((horas_cobradas - 1) * 2.50);
    FinSi
    
    Escribir "Horas facturadas: ", horas_cobradas;
    Escribir "Monto a pagar: B/. ", monto_pagar;
FinAlgoritmo`
      }
    ]
  },
  {
    modulo: 'Práctica 4: Ciclos Repetitivos',
    problemas: [
      {
        titulo: 'Suma de N Números (MIENTRAS)',
        enunciado: 'Leer N números enteros y determinar la suma total acumulada.',
        eps: { 
          entradas: ['N', 'num'], 
          proceso: ['Inicializar suma <- 0, C <- 1', 'Mientras C <= N', 'suma <- suma + num', 'C <- C + 1'], 
          salidas: ['suma'] 
        },
        codigo: `Algoritmo Suma_N_Numeros_Mientras
    Definir N, num, suma, C Como Entero;
    
    Escribir "¿Cuántos números desea ingresar?";
    Leer N;
    
    suma <- 0; // ACUMULADOR
    C <- 1;    // CONTADOR
    
    Mientras C <= N Hacer
        Escribir "Ingrese el número ", C, ":";
        Leer num;
        
        suma <- suma + num; // Acumulamos
        C <- C + 1;         // Incrementamos para salir del ciclo
    FinMientras
    
    Escribir "La suma total acumulada es: ", suma;
FinAlgoritmo`
      },
      {
        titulo: 'Tabla de Multiplicar (PARA)',
        enunciado: 'Generar la tabla de multiplicar (del 1 al 12) para un número N ingresado.',
        eps: { 
          entradas: ['N'], 
          proceso: ['Para C <- 1 Hasta 12 Con Paso 1', 'P <- N * C', 'Mostrar N * C = P'], 
          salidas: ['P (N veces)'] 
        },
        codigo: `Algoritmo Tabla_De_Multiplicar_Para
    Definir N, C, P Como Entero;
    
    Escribir "Ingrese el número para generar su tabla de multiplicar:";
    Leer N;
    
    // El ciclo PARA maneja su propio contador (C), inicio (1) y límite (12)
    Para C <- 1 Hasta 12 Con Paso 1 Hacer
        P <- N * C;
        Escribir N, " * ", C, " = ", P;
    FinPara
FinAlgoritmo`
      },
      {
        titulo: 'Validar Contraseña (REPETIR)',
        enunciado: 'Pedir contraseña. Mientras no sea "1234", volver a pedirla. Evalúa condición al final.',
        eps: { 
          entradas: ['pass'], 
          proceso: ['Repetir: Leer pass', 'Hasta Que pass = "1234"', 'A diferencia del MIENTRAS, ejecuta código siempre 1 vez mínimo'], 
          salidas: ['"Acceso Concedido"'] 
        },
        codigo: `Algoritmo Validacion_Repetir
    Definir pass Como Caracter;
    
    Repetir
        Escribir "Introduzca su contraseña de 4 dígitos:";
        Leer pass;
        
        Si pass <> "1234" Entonces
            Escribir "Error: Contraseña incorrecta, intente de nuevo.";
        FinSi
    Hasta Que pass = "1234"
    
    Escribir "¡Acceso concedido al sistema!";
FinAlgoritmo`
      }
    ]
  }
];
