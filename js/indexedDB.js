function startDB(obj){
            
       var request = indexedDB.open("store", 1);
       
       request.onupgradeneeded = function (e) {
          db = event.target.result;
           console.log(db);
           
          var objectStore = db.createObjectStore("products");
          objectStore = db.createObjectStore("categories");  
          objectStore = db.createObjectStore("shops");
           
           objectStore.transaction.oncomplete = function(event) {
               createObjects(sh);
           }
       };
       
       request.onsuccess = function (e){
           db = this.result;
       };
        
       request.onerror = function (e){
           alert('Error cargando la base de datos');
       };
};
    
    
function addDB(obj, store, key){
      var transaction = db.transaction([store], "readwrite");
      var objectStore = transaction.objectStore(store);         
      var request = objectStore.put(obj, key);
        console.log("aa");
    
      request.onsuccess = function(event) {
          console.log("Objeto añadido: "+key);
      };
    
      request.onerror = function(event) {
          console.log("aa: ");
      };  
    }
    
function updDB(obj, store, key){
      var transaction = db.transaction([store], "readwrite");
      var objectStore = transaction.objectStore(store); 
      var requestUpdate = objectStore.put(obj, key);
      console.log("aa");
  

          
           requestUpdate.onerror = function(event) {
             
           };
          
           requestUpdate.onsuccess = function(event) {
             console.log("objeto actualizado");
           };
      
}

function delDB(obj, store, key){
      var transaction = db.transaction([store], "readwrite");
      var objectStore = transaction.objectStore(store); 
      var request = objectStore.delete(key);
      console.log("aa");

          
          
           request.onerror = function(event) {
             console.log("error");
           };
          
           request.onsuccess = function(event) {
             console.log("objeto eliminado");
           };
}

function borr(){
    var DBDeleteRequest = window.indexedDB.deleteDatabase("store");

    DBDeleteRequest.onerror = function(event) {
      console.log("Error deleting database.");
    };

    DBDeleteRequest.onsuccess = function(event) {
      console.log("Database deleted successfully");
    };
}

startDB();
//borr();
 