const { createApp } = Vue;

createApp({
  data() {
    return {
      contactos: [
        { nombre: 'Daniel', telefono: '477124563', categoria: 'Escuela', mensajes: 0, llamadas: 8 },
        { nombre: 'Mama', telefono: '4771386756', categoria: 'Familia', mensajes: 1, llamadas: 4 }
      ],
      nuevo: {
        nombre: '',
        telefono: '',
        categoria: '',
      }
    }
  },
  computed: {
    totalContactos() {
      return this.contactos.length;
    },
    totalMensajes() {
      return this.contactos.reduce((t, c) => t + c.mensajes, 0);
    },
    totalLlamadas() {
      return this.contactos.reduce((t, c) => t + c.llamadas, 0);
    }
  },
  methods: {
    agregar() {
      if (this.nuevo.nombre && this.nuevo.telefono && this.nuevo.categoria) {
        this.contactos.push({
          ...this.nuevo,
          mensajes: 0,
          llamadas: 0
        });
        this.nuevo = { nombre: '', telefono: '', categoria: '' };
      }
    },
    eliminar(index) {
      this.contactos.splice(index, 1);
    }
  }
}).mount('#app');