import styles from './search.module.css';
import Image from 'next/image';

export default function Search({ books }) {
  return (
    <div className={styles.container}>
      <input className={styles.search} placeholder="Search books" type="text" />
      {books.length > 0 && (
        <ul className={styles.results}>
          {books.map((book) => (
            <div key={book.id}>
              <h3>{book.volumeInfo.title}</h3>
              <Image
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Picture of the author"
                width={90}
                height={100}
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
