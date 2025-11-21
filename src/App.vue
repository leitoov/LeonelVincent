<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="page">
    <header class="logo-row">
      
    </header>

    <main class="panel">
      <h1>Leonel Vincent</h1>
      <p class="lead mb-16">
        Soy una persona apasionada por brindar soluciones innovadoras, generar impactos positivos y marcar la diferencia en la gestión de proyectos y desarrollo web.
      </p>
      <p class="lead">
        Mi formación inicial es como Técnico en Programación y actualmente estoy cursando la carrera de Ingeniería en Sistemas, lo que me permite complementar mi experiencia práctica con una sólida base teórica.
      </p>
      <p class="lead">
      Poseo conocimientos en desarrollo web y mobile utilizando tecnologías como Angular, Vue, React e Ionic, así como experiencia en desarrollo backend con PHP y frameworks como Laravel, Symfony y Yii. Además, cuento con manejo de bases de datos MySQL y MongoDB, lo que me permite abordar proyectos de manera integral.
      </p>
      <p class="lead">
        He obtenido certificaciones en Desarrollo Full Stack por la UTN, en gestión de proyectos y metodologías ágiles mediante LinkedIn Learning, y en áreas de UX/UI, UX Writing y neurociencia del feedback a través de Platzi.
      </p>
      <p class="lead">
        Estas formaciones refuerzan mi visión centrada en el usuario y mi capacidad para trabajar de forma organizada y eficiente.
      </p>
      <p class="lead">
        Me considero una persona proactiva, responsable y con un fuerte deseo de continuar aprendiendo y creciendo profesionalmente.
      </p>
      <p class="lead">
        Mi objetivo es contribuir con soluciones de calidad y seguir desarrollándome en entornos que valoren la innovación y el trabajo colaborativo.
      </p>
      <div class="card">
        <button type="button" class="cta" @click="count++">
          Clicks de prueba: {{ count }}
        </button>
        <p class="muted">
          El contador simplemente asegura que el hot-reload está funcionando.
        </p>
      </div>
    </main>
  </div>
</template>
