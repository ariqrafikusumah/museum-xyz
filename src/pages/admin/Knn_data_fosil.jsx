import axios from 'axios';
import React, { useEffect, useState, Fragment } from 'react'
import { FaPlus } from 'react-icons/fa';
import { Datafosil, Navbar } from './components'
import { Dialog, Transition } from '@headlessui/react'
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Select, TextField, Radio, RadioGroup } from '@mui/material';

function KNNdatafosil() {
    //** GET DATA API FOSIL */
    const [dataFosil, setdataFosil] = useState([]);

    useEffect(() => {
        async function getFosil() {
            try {
                const response = await axios.get(`http://localhost:3300/fosil`)
                const data = response.data;
                // console.log(data);
                setdataFosil(data)
            } catch (error) {
                console.log(error.data)
            }
        }
        getFosil()
    }, [])

    //** POST DATA API FOSIL */
    const [formFosil, setformFosil] = useState({
        no_reg: '',
        no_invent: '',
        kode_bmn: '',
        nup_bmn: '',
        merk_bmn: '',
        no_awal: '',
        satuan: '',
        kelompok_koleksi: '',
        jenis_koleksi: '',
        sub_jenis_koleksi: '',
        kode_jenis_koleksi: '',
        ruang_simpan: '',
        lokasi_simpan: '',
        kondisi: '',
        nama_koleksi: '',
        keterangan: '',
        umur_geologi: '',
        nama_formasi: '',
        lokasi_temuan: '',
        koordinat: '',
        pulau: '',
        peta: '',
        lembar_peta: '',
        skala: '',
        cara_perolehan: '',
        tahun_perolehan: '',
        determinator: '',
        kolektor: '',
        kepemilikan: '',
        publikasi: '',
        operator: '',
        tanggal_dicatat: '',
        nilai_perolehan: '',
        nilai_buku: '',
        foto: '',
        foto_2: '',
        foto_3: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [feedbackMSG, setfeedbackMSG] = useState('');

    const handleSubmit = async (e) => {
        e.prevenDefault();
        setSubmitting(true);

        try {
            const response = await axios.post(`http://localhost:3300/fosil`, formFosil);
            console.log(response.data);
            setSubmitting(false);
            setfeedbackMSG('Form submitted successfully!');
            setformFosil({
                no_reg: '',
                no_invent: '',
                kode_bmn: '',
                nup_bmn: '',
                merk_bmn: '',
                no_awal: '',
                satuan: '',
                kelompok_koleksi: '',
                jenis_koleksi: '',
                sub_jenis_koleksi: '',
                kode_jenis_koleksi: '',
                ruang_simpan: '',
                lokasi_simpan: '',
                kondisi: '',
                nama_koleksi: '',
                keterangan: '',
                umur_geologi: '',
                nama_formasi: '',
                lokasi_temuan: '',
                koordinat: '',
                pulau: '',
                peta: '',
                lembar_peta: '',
                skala: '',
                cara_perolehan: '',
                tahun_perolehan: '',
                determinator: '',
                kolektor: '',
                kepemilikan: '',
                publikasi: '',
                operator: '',
                tanggal_dicatat: '',
                nilai_perolehan: '',
                nilai_buku: '',
                foto: '',
                foto_2: '',
                foto_3: ''
            });
        } catch (error) {
            console.log(error);
            setSubmitting(false);
            setfeedbackMSG('An error occurred while submitting the form.');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformFosil(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    //** GET DATA PROVINSI */
    const [dataProvinsi, setProvinsi] = useState([]);

    useEffect(() => {
        async function getProvinsi() {
            try {
                const response = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/provinsi`)
                const data = response.data;
                // console.log(data.provinsi);
                setProvinsi(data.provinsi)
            } catch (error) {
                console.log(error.data.provinsi)
            }
        }
        getProvinsi()
    }, [])

    //** MODAL DIALOG FORM */
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    //** SELECT JENIS KOLEKSI */ 
    const [jenisKoleksi, setJenisKoleksi] = useState('');

    const handleJenisKoleksiChange = (event) => {
        setJenisKoleksi(event.target.value);
    };

    return (
        <>
            <Navbar />
            <div className='KNNdatafosil xl:px-44 lg:px-12'>
                <div className='p-3'>
                    <h2 className='text-sm font-bold'>Dashboard &gt; KNN Data {dataFosil.type}</h2>
                </div>
                <div className='mb-3'>
                    <button className='border p-2 rounded-lg bg-indigo-300 hover:bg-indigo-400' onClick={openModal}>
                        <FaPlus className='text-xl text-white' />
                    </button>
                </div>
                <div className='p-3 bg-indigo-200 rounded-xl'>
                    <h1 className='font-semibold'> {dataFosil.type}</h1>
                </div>
                <div className='border rounded-lg'>
                    <Datafosil />
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <form onSubmit={handleSubmit}>
                                    <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Tambah Data Fosil
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="no_reg" name='no_reg' type='text' label="No Register" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="no_ivent" name='no_ivent' type='text' label="No Inventaris" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="kode_bmn" name='kode_bmn' type='text' label="Kode BMN" variant="filled" value='6.06.01.06.001' />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="nup" name='nup' type='text' label="NUP BMN" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="merk_bmn" name='merk_bmn' type='text' label="Tipe BMN" variant="filled" value='Fosil' />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="no_awal" name='no_awal' type='text' label="No Awal" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <InputLabel htmlFor="satuan">Satuan</InputLabel>
                                                    <Select id='satuan' name='satuan'>
                                                        <MenuItem value='Set'>Set</MenuItem>
                                                        <MenuItem value='Buah'>Buah</MenuItem>
                                                        <MenuItem value='Unit'>Unit</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="kelompok_koleksi" name='kelompok_koleksi' type='text' label="Kelompok Koleksi" variant="filled" value='Fosil' />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <InputLabel htmlFor="jenis_koleksi">Jenis Koleksi</InputLabel>
                                                    <Select id='jenis_koleksi' name='jenis_koleksi' value={jenisKoleksi} onChange={handleJenisKoleksiChange}>
                                                        <MenuItem value=""></MenuItem>
                                                        <MenuItem value="Vertebrata">Vertebrata</MenuItem>
                                                        <MenuItem value="Invertebrata">Invertebrata</MenuItem>
                                                        <MenuItem value="Mikrofosil">Mikrofosil</MenuItem>
                                                        <MenuItem value="Paleobotani">Paleobotani</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            {jenisKoleksi === '' && (
                                                <>
                                                    <div className='mb-3'>
                                                        <FormControl className='w-full'>
                                                            <InputLabel htmlFor="sub_jenis_koleksi">Sub Jenis Koleksi</InputLabel>
                                                            <Select id='sub_jenis_koleksi' name='sub_jenis_koleksi' variant='filled'>
                                                                <MenuItem value=''></MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='mb-3'>
                                                        <FormControl className='w-full'>
                                                            <InputLabel htmlFor="kode_jenis_koleksi">Kode Jenis Koleksi</InputLabel>
                                                            <Select id='kode_jenis_koleksi' name='kode_jenis_koleksi' variant='filled'>
                                                                <MenuItem value=''></MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </>
                                            )}
                                            {jenisKoleksi === 'Vertebrata' && (
                                                <>
                                                    <div className='mb-3'>
                                                        <FormControl className='w-full'>
                                                            <InputLabel htmlFor="sub_jenis_koleksi">Sub Jenis Koleksi</InputLabel>
                                                            <Select id='sub_jenis_koleksi' name='sub_jenis_koleksi' variant='outlined'>
                                                                <MenuItem value='Mamalia'>Mamalia</MenuItem>
                                                                <MenuItem value='Reptilia'>Reptilia</MenuItem>
                                                                <MenuItem value='Aves'>Aves</MenuItem>
                                                                <MenuItem value='Pisces'>Pisces</MenuItem>
                                                                <MenuItem value='Amphibia'>Amphibia</MenuItem>
                                                                <MenuItem value='Hominid'>Hominid</MenuItem>
                                                                <MenuItem value='Tidak Teridentifikasi'>Tidak Teridentifikasi</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='mb-3'>
                                                        <FormControl className='w-full'>
                                                            <InputLabel htmlFor="kode_jenis_koleksi">Kode Jenis Koleksi</InputLabel>
                                                            <Select id='kode_jenis_koleksi' name='kode_jenis_koleksi' variant='outlined'>
                                                                <MenuItem value='FVM'>FVM</MenuItem>
                                                                <MenuItem value='FVR'>FVR</MenuItem>
                                                                <MenuItem value='FVA'>FVA</MenuItem>
                                                                <MenuItem value='FVP'>FVP</MenuItem>
                                                                <MenuItem value='FVB'>FVB</MenuItem>
                                                                <MenuItem value='FVB'>FVB</MenuItem>
                                                                <MenuItem value='FVB'>FVB</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </>
                                            )}
                                            {jenisKoleksi === 'Invertebrata' && (
                                                <>
                                                    <div className='mb-3'>
                                                        <FormControl className='w-full'>
                                                            <InputLabel htmlFor="sub_jenis_koleksi">Sub Jenis Koleksi</InputLabel>
                                                            <Select id='sub_jenis_koleksi' name='sub_jenis_koleksi' variant='outlined'>
                                                                <MenuItem value='Moluska'>Moluska</MenuItem>
                                                                <MenuItem value='Coelenterata'>Coelenterata</MenuItem>
                                                                <MenuItem value='Echinodermata'>Echinodermata</MenuItem>
                                                                <MenuItem value='Arthropoda'>Arthropoda</MenuItem>
                                                                <MenuItem value='Porifera'>Porifera</MenuItem>
                                                                <MenuItem value='Graptolites'>Graptolites</MenuItem>
                                                                <MenuItem value='Arachnida'>Arachnida</MenuItem>
                                                                <MenuItem value='Brakiopoda'>Brakiopoda</MenuItem>
                                                                <MenuItem value='Annelida'>Annelida</MenuItem>
                                                                <MenuItem value='Tidak Teridentifikasi'>Tidak Teridentifikasi</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='mb-3'>
                                                        <FormControl className='w-full'>
                                                            <InputLabel htmlFor="kode_jenis_koleksi">Kode Jenis Koleksi</InputLabel>
                                                            <Select id='kode_jenis_koleksi' name='kode_jenis_koleksi' variant='outlined'>
                                                                <MenuItem value='FIM'>FIM</MenuItem>
                                                                <MenuItem value='FIC'>FIC</MenuItem>
                                                                <MenuItem value='FIE'>FIE</MenuItem>
                                                                <MenuItem value='FIA'>FIA</MenuItem>
                                                                <MenuItem value='FIP'>FIP</MenuItem>
                                                                <MenuItem value='FIG'>FIG</MenuItem>
                                                                <MenuItem value='FIR'>FIR</MenuItem>
                                                                <MenuItem value='FIB'>FIB</MenuItem>
                                                                <MenuItem value='FIN'>FIN</MenuItem>
                                                                <MenuItem value='FIT'>FIT</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </>
                                            )}
                                            {jenisKoleksi === 'Mikrofosil' && (
                                                <>
                                                    <div className='mb-3'>
                                                        <FormControl className='w-full'>
                                                            <InputLabel htmlFor="sub_jenis_koleksi">Sub Jenis Koleksi</InputLabel>
                                                            <Select id='sub_jenis_koleksi' name='sub_jenis_koleksi' variant='outlined'>
                                                                <MenuItem value='Mikrofosil'>Mikrofosil</MenuItem>
                                                                <MenuItem value='Tidak Teridentifikasi'>Tidak Teridentifikasi</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='mb-3'>
                                                        <FormControl className='w-full'>
                                                            <InputLabel htmlFor="kode_jenis_koleksi">Kode Jenis Koleksi</InputLabel>
                                                            <Select id='kode_jenis_koleksi' name='kode_jenis_koleksi' variant='outlined'>
                                                                <MenuItem value='FMF'>FMF</MenuItem>
                                                                <MenuItem value='FMT'>FMT</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </>
                                            )}
                                            {jenisKoleksi === 'Paleobotani' && (
                                                <>
                                                    <div className='mb-3'>
                                                        <FormControl className='w-full'>
                                                            <InputLabel htmlFor="sub_jenis_koleksi">Sub Jenis Koleksi</InputLabel>
                                                            <Select id='sub_jenis_koleksi' name='sub_jenis_koleksi' variant='outlined'>
                                                                <MenuItem value='Paleobotani'>Paleobotani</MenuItem>
                                                                <MenuItem value='Tidak Teridentifikasi'>Tidak Teridentifikasi</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='mb-3'>
                                                        <FormControl className='w-full'>
                                                            <InputLabel htmlFor="kode_jenis_koleksi">Kode Jenis Koleksi</InputLabel>
                                                            <Select id='kode_jenis_koleksi' name='kode_jenis_koleksi' variant='outlined'>
                                                                <MenuItem value='FPB'>FPB</MenuItem>
                                                                <MenuItem value='FPT'>FPT</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </>
                                            )}
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="ruang_simpan" name='ruang_simpan' type='text' label="Ruang Simpan" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="lokasi_simpan" name='lokasi_simpan' type='text' label="Lokasi Simpan" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <InputLabel htmlFor="kondisi">Kondisi</InputLabel>
                                                    <Select id="kondisi" name="kondisi">
                                                        <MenuItem value="B - Baik">B - Baik</MenuItem>
                                                        <MenuItem value="RR - Rusak Rinagan">RR - Rusak Rinagan</MenuItem>
                                                        <MenuItem value="RB - Rusak Berat">RB - Rusak Berat</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="nama_koleksi" name='nama_koleksi' type='text' label="Nama Koleksi" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <FormLabel htmlFor='keterangan'>Keterangan</FormLabel>
                                                    <textarea className='border-2 border-gray-300' name="keterangan" id="keterangan" cols="30" rows="5" variant='outlined'></textarea>
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <InputLabel htmlFor="umur_geologi">Umur Geologi</InputLabel>
                                                    <Select id='umur_geologi' name='umur_geologi'>
                                                        <MenuItem value="Prakambrium">Prakambrium</MenuItem>
                                                        <MenuItem value="Paleozoikum - Kambrium">Paleozoikum - Kambrium</MenuItem>
                                                        <MenuItem value="Paleozoikum - Ordovium">Paleozoikum - Ordovium</MenuItem>
                                                        <MenuItem value="Paleozoikum - Silur">Paleozoikum - Silur</MenuItem>
                                                        <MenuItem value="Paleozoikum - Devon">Paleozoikum - Devon</MenuItem>
                                                        <MenuItem value="Paleozoikum - Karbon">Paleozoikum - Karbon</MenuItem>
                                                        <MenuItem value="Paleozoikum - Perem">Paleozoikum - Perem</MenuItem>
                                                        <MenuItem value="Mesozoikum - Trias">Mesozoikum - Trias</MenuItem>
                                                        <MenuItem value="Mesozoikum - Jura">Mesozoikum - Jura</MenuItem>
                                                        <MenuItem value="Mesozoikum - Kapur">Mesozoikum - Kapur</MenuItem>
                                                        <MenuItem value="Kenozoikum - Paleogen">Kenozoikum - Paleogen</MenuItem>
                                                        <MenuItem value="Kenozoikum - Eosen">Kenozoikum - Eosen</MenuItem>
                                                        <MenuItem value="Kenozoikum - Oligosen">Kenozoikum - Oligosen</MenuItem>
                                                        <MenuItem value="Kenozoikum - Miosen">Kenozoikum - Miosen</MenuItem>
                                                        <MenuItem value="Kenozoikum - Pilosen">Kenozoikum - Pilosen</MenuItem>
                                                        <MenuItem value="Kenozoikum - Plistosen">Kenozoikum - Plistosen</MenuItem>
                                                        <MenuItem value="Kenozoikum - Holosen">Kenozoikum - Holosen</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="nama_formasi" name='nama_formasi' type='text' label="Nama Formasi" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="lokasi_temuan" name='lokasi_temuan' type='text' label="Lokasi Temuan" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="koordinat" name='koordinat' type='text' label="Koordinat" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <InputLabel htmlFor="pulau">Pulau</InputLabel>
                                                    <Select id='pulau' name='pulau'>
                                                        {Array.isArray(dataProvinsi) && dataProvinsi.map((item, index) => (
                                                            <MenuItem key={index} value={item.nama}>{item.nama}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <InputLabel id="peta">Peta</InputLabel>
                                                <FormControl className='w-full'>
                                                    <RadioGroup
                                                        row
                                                        aria-labelledby="peta"
                                                        name="peta"
                                                    >
                                                        <div className='grid grid-cols-2 gap-1 px-3'>
                                                            <FormControlLabel value="Blad" control={<Radio />} label="Blad" />
                                                            <FormControlLabel value="Rupa Bumi" control={<Radio />} label="Rupa Bumi" />
                                                            <FormControlLabel value="Geologi" control={<Radio />} label="Geologi" />
                                                            <FormControlLabel value="Luar Negeri" control={<Radio />} label="Luar Negeri" />
                                                        </div>
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="lembar_peta" name='lembar_peta' type='text' label="Lembar Peta" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <InputLabel htmlFor="skala">Skala Peta</InputLabel>
                                                    <Select id='skala' name='skala'>
                                                        <MenuItem value="1:50.000">1:50.000</MenuItem>
                                                        <MenuItem value="1:100.000">1:100.000</MenuItem>
                                                        <MenuItem value="1:250.000">1:250.000</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <InputLabel htmlFor='cara_perolehan'>Cara Perolehan</InputLabel>
                                                    <Select id='cara_perolehan' name='cara_perolehan'>
                                                        <MenuItem value="-">-</MenuItem>
                                                        <MenuItem value="Pembuatan">Pembuatan</MenuItem>
                                                        <MenuItem value="Pembelian">Pembelian</MenuItem>
                                                        <MenuItem value="Hibah">Hibah</MenuItem>
                                                        <MenuItem value="Penyelidikan Geologii">Penyelidikan Geologi</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <InputLabel htmlFor='kepemilikan'>Kepemilikan Awal</InputLabel>
                                                    <Select id="kepemilikan" name="kepemilikan">
                                                        <MenuItem value="-">-</MenuItem>
                                                        <MenuItem value="Museum Geologi Bandung">Museum Geologi Bandung</MenuItem>
                                                        <MenuItem value="Dienst van den Mijnbouw">Dienst van den Mijnbouw</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <InputLabel htmlFor="tahun_perolehan">Tahun Kepemilikan</InputLabel>
                                                <FormControl className='w-full'>
                                                    <TextField id="tahun_perolehan" name='tahun_perolehan' type='month' variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="determinator" name='determinator' type='text' label="Determinator" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="kolektor" name='kolektor' type='text' label="Kolektor" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="url" name='url' type='text' label="Publikasi" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="operator" name='operator' type='text' label="Operator" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="foto" name='foto' type='datetime-local' variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="nilai_perolehan" name='nilai_perolehan' type='text' label="Nilai Perolehan" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <FormControl className='w-full'>
                                                    <TextField id="nilai_buku" name='nilai_buku' type='text' label="Nilai Buku" variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <InputLabel htmlFor="foto">Foto 1</InputLabel>
                                                <FormControl className='w-full'>
                                                    <TextField id="foto" name='foto' type='file' variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <InputLabel htmlFor="foto_2">Foto 2</InputLabel>
                                                <FormControl className='w-full'>
                                                    <TextField id="foto_2" name='foto_2' type='file' variant="outlined" />
                                                </FormControl>
                                            </div>
                                            <div className='mb-3'>
                                                <InputLabel htmlFor="foto_3">Foto 3</InputLabel>
                                                <FormControl className='w-full'>
                                                    <TextField id="foto_3" name='foto_3' type='file' variant="outlined" />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-2">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >
                                                {submitting ? 'Save...' : 'Save'}
                                            </button>
                                        </div>
                                        {feedbackMSG && <p>{feedbackMSG}</p>}
                                    </Dialog.Panel>
                                </form>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default KNNdatafosil