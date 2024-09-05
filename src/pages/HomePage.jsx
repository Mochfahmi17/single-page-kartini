import hero from "../assets/hero.png";
import hero_white from "../assets/hero_white.png";
import kartini from "../assets/img/kartini.jpg";
import keluarga_kartini from "../assets/img/keluarga_kartini.jpg";
import pendidikan_kartini from "../assets/img/pendidikan_kartini.jpeg";
import surat_kartini1 from "../assets/img/surat-surat-kartini.jpg";
import surat_kartini2 from "../assets/img/surat-surat-kartini-2.jpeg";

import { BackgroundContext } from "../context/BackgroundContext";
import { useContext } from "react";

const HomePage = () => {
  const { bgRed } = useContext(BackgroundContext);

  let changeHero = bgRed ? hero_white : hero;
  return (
    <>
      {/* Hero Section Start */}
      <section
        className="home pb-10 pt-32 transition-all dark:bg-red-800"
        id="home"
      >
        <div className="container mx-auto px-4 md:px-10">
          <div className="hero grid grid-cols-1 items-center gap-20 md:grid-cols-2">
            <div className="box">
              <h1 className="kartini animate__animated animate__fadeInLeft mb-7 text-4xl font-bold text-slate-800 dark:text-white md:text-5xl">
                Kartini: Suara Perempuan Jawa yang Mendunia
              </h1>
              <p className="mb-7 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                <span className="font-bold dark:text-slate-200">
                  Ingin tahu bagaimana seorang perempuan dari Jawa bisa mengubah
                  dunia?
                </span>{" "}
                Temukan jawabannya di sini. R.A. Kartini, sosok yang membuktikan
                bahwa suara perempuan bisa didengar dan diperhitungkan.
              </p>
              <a
                href="#about"
                className="btn-kartini animate__animated animate__bounce animate__delay-1s inline-block rounded-md bg-red-700 px-4 py-2 text-base font-medium text-white shadow transition-all hover:bg-red-800 dark:bg-white dark:text-slate-700 dark:hover:bg-slate-200 dark:hover:text-red-800"
              >
                Jelajahi Kisah Kartini
              </a>
            </div>
            <div className="box">
              <img
                src={changeHero}
                className="animate__animated animate__fadeIn mx-auto w-[420px]"
                alt="R.A Kartini"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Tentang Section Start */}
      <section
        className="about pb-10 pt-32 transition-all dark:bg-red-800"
        id="about"
      >
        <div className="container mx-auto px-4 md:px-10">
          <div className="tentang mb-10">
            <h4
              data-aos="fade-up"
              className="mb-3 text-center text-sm font-bold text-red-700 dark:text-white"
            >
              Tentang Raden Ajeng Kartini
            </h4>
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="judul text-center text-5xl font-bold text-slate-900 dark:text-slate-200 lg:text-6xl"
            >
              Biografi
            </h2>
          </div>
          <div className="box mt-10 grid grid-cols-1 items-center gap-10 md:block lg:grid lg:grid-cols-2 lg:gap-5">
            <div className="box float-none m-0 w-full self-start md:float-start md:mr-10 md:w-[300px] lg:float-none lg:m-0 lg:w-full">
              <img
                data-aos="fade-in"
                data-aos-duration="1000"
                src={kartini}
                className="mb-1 cursor-pointer"
                alt="Kartini Original Photo"
              />
              <p className="text-center text-sm font-normal text-slate-600 dark:text-white">
                Raden Ajeng Kartini
              </p>
              <p className="mb-3 text-center text-sm font-normal text-slate-600 dark:text-white">
                <i>Wikipedia.org</i>
              </p>
            </div>
            <div data-aos="fade-in" data-aos-duration="1000" className="box">
              <h3 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-200">
                Raden Ajeng Kartini: Pelopor Emansipasi Wanita Indonesia
              </h3>
              <p className="mb-3 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                Raden Ajeng Kartini, lahir di Jepara pada 21 April 1879, adalah
                sosok yang tak tergantikan dalam sejarah perjuangan emansipasi
                wanita di Indonesia. Sebagai putri seorang bupati, Kartini
                memiliki akses pada pendidikan yang lebih baik dibandingkan
                kebanyakan perempuan pada zamannya. Namun, tradisi pingit yang
                membatasi kebebasan perempuan membuatnya haus akan pengetahuan
                dan perubahan.
              </p>
              <p className="mb-3 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                {
                  'Masa pingit menjadi periode yang intensif bagi Kartini untuk belajar dan membaca. Ia banyak membaca buku-buku tentang perempuan dan peradaban Barat. Melalui surat-menyurat dengan teman-temannya di Belanda, Kartini mengungkapkan pemikirannya tentang kedudukan perempuan di masyarakat Jawa yang masih sangat patriarkal. Surat-surat Kartini ini kemudian dibukukan dengan judul "Habis Gelap Terbitlah Terang" yang menjadi karya monumental dan inspirasi bagi banyak generasi.'
                }
              </p>
              <p className="mb-3 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                Setelah menikah dengan Bupati Rembang, Kartini tetap aktif dalam
                memperjuangkan hak-hak perempuan. Ia mendirikan sekolah untuk
                perempuan di Rembang dan mendorong pentingnya pendidikan bagi
                kaum hawa. Kartini juga mengkampanyekan perbaikan kondisi sosial
                perempuan, seperti pernikahan anak dan perlakuan tidak adil
                terhadap perempuan.
              </p>
              <p className="mb-3 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                Pemikiran Kartini tentang emansipasi wanita sangat relevan
                hingga saat ini. Ia percaya bahwa perempuan memiliki hak yang
                sama untuk mendapatkan pendidikan, bekerja, dan berpartisipasi
                dalam kehidupan masyarakat. Kartini juga menekankan pentingnya
                membangun karakter dan kemandirian perempuan.
              </p>
              <p className="mb-3 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                Meskipun meninggal dunia pada usia muda, warisan Kartini terus
                hidup dan menginspirasi jutaan orang. Hari Kartini yang
                diperingati setiap tanggal 21 April menjadi pengingat akan
                perjuangan dan semangat Kartini dalam memperjuangkan kesetaraan
                gender.
              </p>
            </div>
          </div>
          <div className="keluarga mb-10 mt-32">
            <h2
              data-aos="fade-up"
              className="judul mb-5 text-center text-5xl font-bold text-slate-900 dark:text-slate-200 lg:text-6xl"
            >
              Keluarga
            </h2>
          </div>
          <div className="box">
            <div className="img mb-10 flex flex-col items-center justify-center">
              <img
                data-aos="fade-up"
                data-aos-delay="300"
                src={keluarga_kartini}
                className="mb-1 cursor-pointer"
                alt="Keluarga Kartini"
              />
              <p className="text-center text-sm font-normal text-slate-600 dark:text-white">
                Foto Keluarga R.A Kartini
              </p>
              <p className="mb-3 text-center text-sm font-normal text-slate-600 dark:text-white">
                <i>Tribunnews.com</i>
              </p>
            </div>
            <div data-aos-delay="600" className="box">
              <h3 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-200">
                Keluarga Kartini: Akar Perjuangan
              </h3>
              <p className="mb-3 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                Raden Ajeng Kartini lahir dalam lingkungan keluarga priyayi di
                Jepara. Ayahnya, Raden Mas Adipati Ario Sosroningrat, adalah
                seorang bupati yang mendukung pendidikan. Meskipun demikian,
                Kartini tetap menghadapi batasan-batasan yang umum dialami
                perempuan pada masanya. Ketertarikan Kartini pada dunia luar dan
                semangat untuk memajukan kaum perempuan membuatnya menjalin
                korespondensi dengan sejumlah tokoh Belanda. Pernikahannya
                dengan Bupati Rembang, K.R.M. Adipati Ario Singgih Djojo
                Adhiningrat, tidak menghentikan semangat juangnya. Melalui
                surat-suratnya, Kartini menginspirasi banyak perempuan untuk
                meraih mimpi dan memperjuangkan kesetaraan gender.
              </p>
            </div>
          </div>
          <div className="pendidikan mb-10 mt-32">
            <h2
              data-aos="fade-up"
              className="judul mb-5 text-center text-5xl font-bold text-slate-900 dark:text-slate-200 lg:text-6xl"
            >
              Pendidikan
            </h2>
          </div>
          <div className="box mb-10 flex flex-col items-center justify-center">
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={pendidikan_kartini}
              className="mb-1 cursor-pointer"
              alt="Pendidikan R.A Kartini"
            />
            <p className="text-center text-sm font-normal text-slate-600 dark:text-white">
              Foto Pendidikan R.A Kartini
            </p>
            <p className="mb-3 text-center text-sm font-normal text-slate-600 dark:text-white">
              <i>cloudfront.net</i>
            </p>
          </div>
          <div className="box">
            <h3 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-200">
              Pendidikan Adalah Kunci
            </h3>
            <p className="mb-3 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
              Bagi Kartini, pendidikan bukan hanya sekadar memperoleh
              pengetahuan, tetapi juga merupakan kunci untuk mencapai perubahan
              sosial. Ia melihat betapa pentingnya pendidikan bagi perempuan
              untuk dapat berperan aktif dalam masyarakat. Melalui
              surat-suratnya, Kartini menyuarakan pentingnya pendidikan bagi
              kaum perempuan dan mendorong mereka untuk berani bermimpi dan
              meraih cita-cita.
            </p>
          </div>
        </div>
      </section>
      {/* Tentang Section End */}

      {/* Surat Section Start */}
      <section className="surat pb-10 pt-32 dark:bg-red-800" id="surat">
        <div className="container mx-auto px-4 md:px-10">
          <div className="surat mb-10">
            <h4
              data-aos="fade-up"
              className="mb-3 text-center text-sm font-bold text-red-700 dark:text-white"
            >
              Surat-surat Raden Ajeng Kartini
            </h4>
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="judul text-center text-5xl font-bold text-slate-900 dark:text-slate-200 lg:text-6xl"
            >
              Surat-Surat R.A Kartini
            </h2>
          </div>
          <div className="box mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:items-center lg:gap-5">
            <div className="img mx-auto">
              <img
                src={surat_kartini1}
                className="mb-1 w-full cursor-pointer"
                alt="Surat-Surat Kartini"
              />
              <p className="text-center text-sm font-normal text-slate-600 dark:text-white">
                Foto Surat Kartini 1
              </p>
              <p className="text-center text-sm font-normal text-slate-600 dark:text-white">
                <i>Yasmin.or.id</i>
              </p>
            </div>
            <div className="konten">
              <div className="box">
                <h3 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-200">
                  Sejarah Surat-Surat Kartini: Jendela Menuju Pemikiran Sang
                  Pahlawan
                </h3>
                <p className="mb-10 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                  Surat-surat Kartini bukan sekadar kumpulan tulisan, melainkan
                  jendela yang menguak pemikiran mendalam seorang perempuan Jawa
                  yang merindukan perubahan. Surat-surat ini menjadi saksi bisu
                  perjuangan Kartini dalam memperjuangkan hak-hak perempuan dan
                  kemajuan bangsa.
                </p>
              </div>
              <div className="box">
                <h3 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-200">
                  Awal Mula Penulisan Surat
                </h3>
                <p className="mb-3 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                  Kartini, putri bupati Jepara, hidup di masa di mana perempuan
                  Jawa dibatasi oleh adat dan tradisi. Rasa ingin tahunya yang
                  tinggi membuatnya haus akan pengetahuan. Tidak puas dengan
                  pendidikan yang terbatas, Kartini mencari jalan keluar dengan
                  menulis surat kepada teman-teman korespondensinya di Belanda.
                </p>
                <p className="mb-10 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                  Surat pertama Kartini ditulis pada tahun 1899. Melalui
                  surat-surat ini, Kartini mencurahkan isi hatinya, pemikirannya
                  tentang kedudukan perempuan, dan cita-citanya untuk memajukan
                  bangsa. Teman-teman korespondensinya di Belanda, seperti Rosa
                  Abendanon dan Stella Zeehandelaar, menjadi tempat Kartini
                  mencurahkan isi hatinya dan memberikan dukungan moril.
                </p>
              </div>
            </div>
          </div>
          <div className="box mb-10 grid grid-cols-1 md:grid-cols-2 lg:gap-5">
            <div className="kontent mb-10">
              <h3 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-200">
                Isi Surat-Surat Kartini
              </h3>
              <p className="mb-3 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                Isi surat-surat Kartini sangat beragam, mulai dari kehidupan
                sehari-hari, pandangan tentang pendidikan, perkawinan, hingga
                cita-citanya untuk memajukan bangsa. Beberapa tema utama yang
                sering muncul dalam surat-surat Kartini antara lain:
              </p>
              <div className="box">
                <ul className="ml-7 mt-5 md:ml-10">
                  <li className="mb-2 list-disc dark:text-slate-300">
                    <span className="font-bold dark:text-slate-200">
                      Pendidikan Perempuan:
                    </span>{" "}
                    Kartini sangat meyakini pentingnya pendidikan bagi
                    perempuan. Ia berpendapat bahwa pendidikan adalah kunci
                    untuk memajukan derajat perempuan dan bangsa.
                  </li>
                  <li className="mb-2 list-disc dark:text-slate-300">
                    <span className="font-bold dark:text-slate-200">
                      Perkawinan:
                    </span>{" "}
                    Kartini mengkritik sistem perkawinan yang berlaku pada
                    masanya yang seringkali tidak memberikan kebebasan bagi
                    perempuan untuk memilih pasangan hidup.
                  </li>
                  <li className="mb-2 list-disc dark:text-slate-300">
                    <span className="font-bold dark:text-slate-200">
                      Kedudukan Perempuan:
                    </span>{" "}
                    Kartini ingin agar perempuan memiliki kedudukan yang sama
                    dengan laki-laki dalam masyarakat. Ia berjuang untuk
                    menghapus diskriminasi terhadap perempuan.
                  </li>
                  <li className="list-disc dark:text-slate-300">
                    <span className="font-bold dark:text-slate-200">
                      Kebudayaan Jawa:
                    </span>{" "}
                    Kartini memiliki pandangan yang kritis terhadap beberapa
                    aspek budaya Jawa yang dianggapnya menghambat kemajuan.
                  </li>
                </ul>
              </div>
            </div>
            <div className="img mx-auto lg:items-center">
              <img
                src={surat_kartini2}
                className="mb-1 w-full cursor-pointer"
                alt="Surat-Surat Kartini 2"
              />
              <p className="text-center text-sm font-normal text-slate-600 dark:text-white">
                Foto surat kartini 2
              </p>
              <p className="text-center text-sm font-normal text-slate-600 dark:text-white">
                <i>historiadotid.s3-ap-southeast-1.amazonaws.com</i>
              </p>
            </div>
          </div>
          <div className="box">
            <h3 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-200">
              Penerbitan Surat-Surat Kartini
            </h3>
            <p className="mb-3 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
              {
                'Setelah Kartini meninggal pada tahun 1904, surat-surat yang ditulisnya dikumpulkan dan diterbitkan oleh sahabatnya, J.H. Abendanon, dengan judul "Door Duisternis tot Licht" (Dari Kegelapan Menuju Cahaya). Buku ini kemudian diterjemahkan ke dalam bahasa Indonesia dengan judul "Habis Gelap Terbitlah Terang" oleh Armijn Pane.'
              }
            </p>
            <p className="mb-10 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
              Penerbitan surat-surat Kartini ini mendapat sambutan yang sangat
              hangat dari masyarakat. Surat-surat Kartini menjadi inspirasi bagi
              banyak orang, terutama perempuan, untuk memperjuangkan hak-hak
              mereka dan memajukan bangsa.
            </p>
          </div>
          <div className="box">
            <h3 className="mb-5 text-2xl font-bold text-slate-800 dark:text-slate-200">
              Warisan Surat-Surat Kartini
            </h3>
            <p className="mb-3 text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
              Hingga kini, surat-surat Kartini masih relevan dan menjadi sumber
              inspirasi bagi banyak orang. Surat-surat ini mengajarkan kita
              tentang pentingnya pendidikan, kesetaraan gender, dan semangat
              untuk terus belajar dan berkembang. Berikut adalah beberapa
              warisan utama dari RA Kartini:
            </p>
            <div className="box">
              <ul className="ml-7 mt-5 md:ml-10">
                <li className="mb-2 list-disc dark:marker:text-white">
                  <p className="text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                    <span className="font-bold dark:text-slate-200">
                      Pendidikan sebagai Kunci Kebebasan :
                    </span>{" "}
                    Kartini sangat meyakini bahwa pendidikan adalah kunci untuk
                    membuka pintu kesempatan bagi perempuan. Beliau berjuang
                    agar perempuan mendapatkan akses yang sama terhadap
                    pendidikan seperti laki-laki.
                  </p>
                </li>
                <li className="mb-2 list-disc dark:marker:text-white">
                  <p className="text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                    <span className="font-bold dark:text-slate-200">
                      Perjuangan untuk Kesetaraan Gender :
                    </span>{" "}
                    Dalam surat-suratnya, Kartini tak henti-hentinya
                    memperjuangkan hak-hak perempuan. Beliau mengkritik adat
                    istiadat yang membelenggu perempuan dan mendorong
                    terciptanya masyarakat yang adil dan setara.
                  </p>
                </li>
                <li className="mb-2 list-disc dark:marker:text-white">
                  <p className="text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                    <span className="font-bold dark:text-slate-200">
                      Semangat Nasionalisme :
                    </span>{" "}
                    Di balik semangat emansipasinya, Kartini juga memiliki jiwa
                    nasionalisme yang tinggi. Beliau berharap agar perempuan
                    Indonesia turut berperan dalam perjuangan meraih
                    kemerdekaan.
                  </p>
                </li>
                <li className="list-disc dark:marker:text-white">
                  <p className="text-base/relaxed font-medium text-slate-700 dark:text-slate-300">
                    <span className="font-bold dark:text-slate-200">
                      Peran Penting Perempuan dalam Pembangunan :
                    </span>{" "}
                    Kartini percaya bahwa perempuan memiliki peran yang sangat
                    penting dalam pembangunan bangsa.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Surat Section End */}

      {/* Timeline Section Start */}
      <section
        className="timeline box-content pb-32 pt-32 dark:bg-red-800"
        id="timeline"
      >
        <div className="container mx-auto px-4 md:px-10">
          <div className="box-judul mb-10">
            <h4
              data-aos="fade-up"
              className="mb-3 text-center text-sm font-bold text-red-700 dark:text-white"
            >
              Timeline
            </h4>
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="judul mb-3 text-center text-5xl font-bold text-slate-900 dark:text-slate-200 lg:text-6xl"
            >
              Timeline perjuangan R.A Kartini
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-center text-sm font-medium text-slate-700 dark:text-slate-300 md:text-base"
            >
              Ini adalah perjalanan kartini berdasarkan timeline berikut.
            </p>
          </div>
          <div className="timeline-content relative mx-auto mt-10 max-w-[1200px] after:absolute after:left-8 after:top-0 after:-ml-1 after:h-full after:w-2 after:bg-red-700 dark:after:bg-white after:md:left-1/2">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="relative left-0 w-full py-3 pl-20 pr-6 md:w-1/2 md:px-12"
            >
              <div className="circle absolute -right-5 top-8 z-10 h-10 w-10 rounded-full bg-red-700 dark:bg-white"></div>
              <div className="text-box relative rounded-md bg-slate-50 px-8 py-5 text-base shadow-md">
                <h3 className="text-xl font-semibold text-slate-800 md:text-2xl">
                  Masa Muda
                </h3>
                <small className="mb-4 inline-block text-xs font-semibold opacity-40">
                  1879-1899
                </small>
                <p className="text-xs font-medium text-slate-700 md:text-sm">
                  Kartini tumbuh dalam lingkungan priyayi dan memiliki akses
                  pendidikan yang terbatas. Namun, ia memanfaatkan waktu
                  luangnya untuk membaca dan menulis, serta berkorespondensi
                  dengan teman-temannya.
                </p>
                <span className="left-arrow absolute -right-4 top-6 z-10 h-5 w-5 border-b-[15px] border-l-[15px] border-t-[15px] border-b-transparent border-l-slate-50 border-t-transparent"></span>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="relative left-0 w-full py-3 pl-20 pr-6 md:left-1/2 md:w-1/2 md:px-12"
            >
              <div className="circle-right absolute top-8 z-10 h-10 w-10 rounded-full bg-red-700 dark:bg-white md:-left-5"></div>
              <div className="text-box relative rounded-md bg-slate-50 px-8 py-5 text-base shadow-md">
                <h3 className="text-xl font-semibold text-slate-800 md:text-2xl">
                  Perjuangan
                </h3>
                <small className="mb-4 inline-block text-xs font-semibold opacity-40">
                  1900-1904
                </small>
                <p className="text-xs font-medium text-slate-700 md:text-sm">
                  Selama masa pingit, Kartini mulai menyadari ketidakadilan yang
                  dialami perempuan. Ia berjuang untuk mendapatkan hak
                  pendidikan dan kesetaraan gender.
                </p>
                <span className="right-arrow absolute -left-4 top-6 z-10 h-5 w-5 border-b-[15px] border-r-[15px] border-t-[15px] border-b-transparent border-r-slate-50 border-t-transparent"></span>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="relative left-0 w-full py-3 pl-20 pr-6 md:w-1/2 md:px-12"
            >
              <div className="circle absolute -right-5 top-8 z-10 h-10 w-10 rounded-full bg-red-700 dark:bg-white"></div>
              <div className="text-box relative rounded-md bg-slate-50 px-8 py-5 text-base shadow-md">
                <h3 className="text-xl font-semibold text-slate-800 md:text-2xl">
                  Warisan
                </h3>
                <small className="mb-4 inline-block text-xs font-semibold opacity-40">
                  setelah 1904
                </small>
                <p className="text-xs font-medium text-slate-700 md:text-sm">
                  Surat-surat Kartini yang kemudian dibukukan menjadi inspirasi
                  bagi banyak generasi. Sekolah Kartini yang ia dirikan menjadi
                  tonggak sejarah pendidikan perempuan di Indonesia.
                </p>
                <span className="left-arrow absolute -right-4 top-6 z-10 h-5 w-5 border-b-[15px] border-l-[15px] border-t-[15px] border-b-transparent border-l-slate-50 border-t-transparent"></span>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="relative left-0 w-full py-3 pl-20 pr-6 md:left-1/2 md:w-1/2 md:px-12"
            >
              <div className="circle-right absolute top-8 z-10 h-10 w-10 rounded-full bg-red-700 dark:bg-white md:-left-5"></div>
              <div className="text-box relative rounded-md bg-slate-50 px-8 py-5 text-base shadow-md">
                <h3 className="text-xl font-semibold text-slate-800 md:text-2xl">
                  Pengaruh
                </h3>
                <small className="mb-4 inline-block text-xs font-semibold opacity-40">
                  setelah 1904
                </small>
                <p className="text-xs font-medium text-slate-700 md:text-sm">
                  Kartini menjadi simbol perjuangan perempuan Indonesia.
                  Pemikirannya tentang emansipasi wanita terus relevan hingga
                  saat ini.
                </p>
                <span className="right-arrow absolute -left-4 top-6 z-10 h-5 w-5 border-b-[15px] border-r-[15px] border-t-[15px] border-b-transparent border-r-slate-50 border-t-transparent"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline Section End */}
    </>
  );
};

export default HomePage;
