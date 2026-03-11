/**
 * Préfixe le chemin avec BASE_URL pour que les images fonctionnent
 * aussi bien en local qu'une fois déployées sur GitHub Pages.
 *
 * Les images doivent être placées dans le dossier public/ du projet.
 * Ex : public/images/creations/bibis/bibi-elegance-rose-1.jpg
 *      → getImageUrl('images/creations/bibis/bibi-elegance-rose-1.jpg')
 */
export function getImageUrl(path) {
  if (!path) return null;
  return import.meta.env.BASE_URL + path;
}
