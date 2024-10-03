export default function DaftarSiswa() {
    const daftarSiswa = ["John", "Jane", "Joe"];
    return (
      <ul>
        {daftarSiswa.map((siswa) => (
          <li key={siswa}>{siswa}</li>
        ))}
      </ul>
    );
  }