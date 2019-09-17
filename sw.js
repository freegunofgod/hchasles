let fichier_offline /*ou cache_fichier*/ = [
    "/index.html",
    "/style.css",
    "/reset.css",
    "/app.js",
]

/* installer le worker*/

self.addEventListener("install",function(event){
    console.log("SW version - Install Event")
    self.skipWaiting() /*permet de skip l'attente de l'installation*/
    event.waitUntil( 

        /*création d'un fichier cache*/

        caches.open("cache-v1") 
        .then(function(cache) {
            console.log("Mise en cache des fichiers")
            return cache.addAll(fichier_offline)
        })
        .catch(function(erreur){
            
        }
    )
})
/* activer le worker */

self.addEventListener("activate",function(event){
    console.log("SW version - activate Event")
})
/* installer le worker*/    