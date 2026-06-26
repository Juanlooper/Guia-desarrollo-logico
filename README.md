# Guía de Desarrollo Lógico: PSeInt y Pseudocódigo (VECTA)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://guia-desarrollo-logico.vercel.app)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)]()

## Acerca de este Proyecto
Este repositorio contiene el código fuente de la **Guía de Desarrollo Lógico (Plataforma VECTA)**. Es una aplicación web interactiva diseñada para enseñar los fundamentos de la lógica de programación enfocándose estrictamente en el **Pseudocódigo** utilizando el estándar de **PSeInt**. 

El objetivo es transformar la teoría lógica tradicional en una experiencia visual e interactiva, permitiendo a los estudiantes entender cómo fluyen los datos y las instrucciones antes de pasar a un lenguaje de programación real.

**Demo en Vivo:** [guia-desarrollo-logico.vercel.app](https://guia-desarrollo-logico.vercel.app)

## Módulos de PSeInt Cubiertos
La guía está estructurada en los siguientes módulos fundamentales de pseudocódigo:

### 1. Fundamentos y Variables
* Reglas estrictas para los identificadores (variables) en PSeInt.
* Exploración interactiva de los tipos de datos principales: **Entero, Real, Caracter y Logico**.

### 2. Reglas del Algoritmo PSeInt
* Estructura base de un algoritmo (`INICIO` ... `FIN`).
* Reglas de sintaxis, uso de mayúsculas, comas y apóstrofes.
* Uso de la flecha de asignación (`<-`).

### 3. Expresiones, Operadores y Jerarquía
* Jerarquía de operaciones matemáticas.
* Operadores aritméticos, relacionales y lógicos.
* Simulador interactivo para funciones nativas de PSeInt como **`TRUNC`** (truncamiento) y **`MOD`** (residuo).

### 4. Condicionales Simples y Dobles
* Estructura lógica del `Si ... Entonces ... Sino ... FinSi`.

### 5. Ciclos Repetitivos
* Conceptos de **Contadores** (`C <- C + 1`) y **Acumuladores**.
* Simuladores de flujo para los 3 bucles principales de PSeInt:
  * `Mientras ... Hacer`
  * `Repetir ... Hasta Que`
  * `Para ... Hasta ... Con Paso`

## Tecnologías Utilizadas
Según la configuración del repositorio, este proyecto está construido con herramientas modernas de desarrollo web:
* **React** (Librería de UI)
* **Vite** (Herramienta de construcción rápida)
* **Tailwind CSS** (Framework de estilos para el diseño moderno y oscuro)

## Estructura del Repositorio
```text
Guia-desarrollo-logico/
├── public/                 # Archivos públicos y assets estáticos
├── src/                    # Código fuente de React (Componentes lógicos e interactivos)
├── eslint.config.js        # Configuración de linter
├── index.html              # Punto de entrada HTML
├── package.json            # Dependencias del proyecto (Vite, React, Tailwind)
├── postcss.config.js       # Configuración de PostCSS (para Tailwind)
├── tailwind.config.js      # Configuración de estilos y diseño
└── vite.config.js          # Configuración del bundler
```

## Instalación y Uso Local

Para correr este proyecto interactivo en tu propia máquina:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Juanlooper/Guia-desarrollo-logico.git
   ```
2. **Navegar al directorio:**
   ```bash
   cd Guia-desarrollo-logico
   ```
3. **Instalar dependencias:**
   ```bash
   npm install
   ```
4. **Iniciar el servidor de desarrollo Vite:**
   ```bash
   npm run dev
   ```
5. Abre la URL local (usualmente `http://localhost:5173`) en tu navegador.

## Contribuciones
¡Las contribuciones son bienvenidas! Si deseas agregar más ejercicios de pseudocódigo, nuevos simuladores de algoritmos, o corregir algún comportamiento de PSeInt, siéntete libre de hacer un fork y enviar un pull request.

## Créditos
Desarrollado por **Juan Rodriguez** (Miembro de VECTA / [@Juanlooper](https://github.com/Juanlooper)).
