function showInfo(title) {
    const infoContainer = document.getElementById('info-container');
    const arduinoTitle = document.getElementById('arduino-title');
    
    arduinoTitle.innerText = title;
    infoContainer.style.display = 'block';
}

function hideInfo() {
    const infoContainer = document.getElementById('info-container');
    infoContainer.style.display = 'none';
}

function showDetails(title) {
    const arduinoInfo = document.getElementById('arduino-info');

    // Objeto que contiene información específica para cada modelo
    const modelDetails = {
        'Arduino Uno': 'El Arduino Uno es una placa de desarrollo basada en el microcontrolador ATmega328.',
        'Arduino Nano': 'El Arduino Nano es una versión compacta del Arduino Uno, ideal para proyectos con espacio limitado.',
        'Arduino Lilypad': 'Arduino Lilypad está diseñado para proyectos de ropa y textiles.',
        'Arduino Mega': ' Es una versión mejorada del Arduino Uno que está pensada para manejar tareas más sofisticadas y exigentes.'
        // Agregar más información para otros modelos de Arduino
    };

    // Obtener la información correspondiente al título del modelo
    const details = modelDetails[title] || 'Información no disponible.';
    
    arduinoInfo.innerText = details;
}
