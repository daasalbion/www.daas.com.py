/**
 * Created by daasalbion on 22/06/14.
 */
// Helpers no se para que sirve, pero parece que ordena de alguna manera los elementos del array
shuffle = function(o) {
    for ( var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
        ;
    return o;
};

String.prototype.hashCode = function(){
    // See http://www.cse.yorku.ca/~oz/hash.html
    var hash = 5381;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash << 5)+hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
//obtener el modulo de los numeros
Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
}