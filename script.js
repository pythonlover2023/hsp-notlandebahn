document.addEventListener('DOMContentLoaded', () => {
  // Einfacher Test: Alert nach 5 Sek
  setTimeout(() => alert('Notlandebahn lädt – willkommen!'), 5000);
  
  // Share Buttons generieren (wenn id="share-buttons" da ist)
  const container = document.getElementById('share-buttons');
  if (container) {
    container.innerHTML = '<a href="https://wa.me/?text=HSP Notlandebahn lebt!" class="share-btn">WhatsApp</a><a href="https://twitter.com/intent/tweet?text=HSP Notlandebahn lebt!" class="share-btn">X</a>';
  }
});
