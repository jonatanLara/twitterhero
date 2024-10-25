// guardar la cache dinamico
function actializarCacheDinamico(dynamic, req, res) {
    if (res.ok) {
        return caches.open(dynamic).then(cache => {
            cache.put(req, res.clone())
            return res.clone()
        })
    } else {
        return res
    }
}