function insertionSort(arr) {
    // Parcourt le tableau à partir du deuxième élément
    for (let i = 1; i < arr.length; i++) {
        // L'élément à insérer dans la séquence triée
        let current = arr[i];
        
        // Trouver la position appropriée pour l'élément courant
        let j = i - 1;
        
        // Déplacer les éléments plus grands que current vers la droite
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Déplacer l'élément vers la droite
            j--; // Passer à l'élément précédent
        }
        
        // Insérer current à sa position correcte
        arr[j + 1] = current;
    }
    return arr;
}

// Exemple d'utilisation
let array = [12, 11, 13, 5, 6];
console.log("Tableau trié :", insertionSort(array));
