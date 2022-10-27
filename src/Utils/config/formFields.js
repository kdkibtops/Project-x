const clinicDictionary = {
    pat_nat_id: 'National ID',
    pat_id: 'Patient ID',
    lab: 'Laboratory',
    hb: 'Hb.',
    tlc: 'T.L.C.',
    platelets: 'Platelets',
    inr: 'INR',
    date: 'Date',
    patient_name: 'Patient Name',
    age: 'Age',
    gender: 'Gender',
    htn: 'Hypertensive',
    hcv: 'H.C.V',
    hbv: 'H.B.V',
    hiv: 'H.I.V',
    dm: 'DM',
    child_pugh: 'Child Pough',
    hcv_virology: 'HCV PCR',
    hbv_virology: 'HBV PCR',
    hiv_virology: 'HIV PCR',
    ckd: 'C.K.D',
    disability: 'Disability',
    cardiac: 'Cardiac',
    radiologist: 'Radiologist',
    plan_setting: 'Plan setting',
    decision: 'Decision',
    further: 'Further',
    remarks: 'Remarks',
    clinic_id: 'Clinic ID',
    alt: 'ALT',
    ast: 'AST',
    bilirubin_total: 'T.Bilirubin',
    bilirubin_direct: 'D.Bilirubin',
    albumin: 'Albumin',
    s_creat: 'S.Creat',
    urea: 'Urea',
    potassium: 'K+',
    sodium: 'Na+',
    aphe: 'Arterial enhancement',
    growth: 'Growth',
    lipidol: 'Lipidol',
    mpv: 'Main portal vein',
    lpv: 'Left portal vein',
    rpv: 'Right portal vein',
    ha_origin: 'H.A. Origin',
    size: 'Largest HFL size',
    cirrhosis: 'Cirrhosis',
    ascites: 'Ascites',
    washout: 'Washout',
    hfl_lobe: 'HFL lobe',
    hfl_segment: 'HFL segment',
    hfl_number: 'HFL number',
    center: 'Center',
    diffusion: 'Diffusion',
    capsule: 'Capsule',
    t1: 'T1',
    t2: 'T2',
    density: 'Density',
    echogenicity: 'Echogenicity',
    afp: 'A.F.P.',
    cea: 'C.E.A',
    ca19_9: 'CA 19-9',
    ca_125: 'CA 125',
    surgeon: 'Surgeon',
    complications: 'Complications',
    outcome: 'Outcome',
    transplant: 'Transplant',
    catheter: 'Catheter',
    parent_feeding_artery: 'Parent Feeder',
    needle: 'Needle',
    clinical_data: 'Clinical Data',
    chemistry: 'Chemistry',
    cbc: 'C.B.C.',
    ct: 'C.T.',
    mri: 'M.R.I.',
    patients_personal: 'Personal data',
    resection: 'Resection data',
    rfa: 'Ablation data',
    tace: ' TACE data',
    tumor_markers: "Tumor Markers",
    ultrasound: 'Ultrasound',
    virology: 'Virology',
    patient_plan: 'Patient Plan'
}
export const registerationFormFields = [
    {
        id: 'fullname',
        text: 'Full name',
        name: 'fullname',
        type: 'text'
    },
    {
        id: 'username',
        text: 'User name',
        name: 'username',
        type: 'text'
    },
    {
        id: 'password',
        text: 'Password',
        name: 'password',
        type: 'password'
    },
    {
        id: 'confirmPassword',
        text: 'Confirm Password',
        name: 'confirmPassword',
        type: 'password'
    },
    {
        id: 'role',
        text: 'Role',
        name: 'role',
        type: 'select',
        options: [
            { value: 'admin', text: 'Admin' },
            { value: 'fellow', text: 'Fellow' },
            { value: 'patient', text: 'Patient' },
            { value: 'user', text: 'User' },
            { value: 'guest', text: 'Guest' }
        ]
    },
    {
        id: 'degree',
        text: 'Scientific Degree',
        name: 'degree',
        type: 'select',
        options: [
            { value: 'MD', text: 'M.D.' },
            { value: 'MSc', text: 'M.Sc.' },
            { value: 'Bch', text: 'B.Ch.' },
            { value: 'Fellow', text: 'Fellowship' },
            { value: 'none', text: 'N/A' }
        ]
    },
    {
        id: 'email',
        text: 'E-mail',
        name: 'email',
        type: 'email'
    },

]
export const patientPersonalFormFields = [
    {
        id: 'firstname',
        text: 'First name',
        name: 'firstname',
        type: 'text'
    },
    {
        id: 'middlename',
        text: 'Middle name',
        name: 'middlename',
        type: 'text'
    },
    {
        id: 'lastname',
        text: 'Last Name',
        name: 'lastname',
        type: 'text'
    },
    {
        id: 'hospital_id',
        text: 'Hospital ID',
        name: 'hospital_id',
        type: 'text'
    },
    {
        id: 'pat_nat_id',
        text: 'National ID',
        name: 'pat_nat_id',
        type: 'text'
    },
    {
        id: 'mobile',
        text: 'Mobile',
        name: 'mobile',
        type: 'text'
    },
    {
        id: 'dob',
        text: 'Date of birth',
        name: 'dob',
        type: 'date'
    },
    {
        id: 'residence',
        text: 'Residence',
        name: 'residence',
        type: 'text',
        required: false,

    },
    {
        id: 'gender',
        text: 'Gender',
        name: 'gender',
        type: 'select',
        options: [
            { value: 'male', text: 'Male' },
            { value: 'female', text: 'Female' }
        ]
    },
    {
        id: 'rank',
        text: 'Rank',
        name: 'rank',
        type: 'select',
        options: [
            { value: 'Civilian', text: 'Civilian' },
            { value: 'Military', text: 'Military' }
        ]
    },
    {
        id: 'firstvisit',
        text: 'First Visit',
        name: 'firstvisit',
        type: 'date'
    },
    {
        id: 'lastvisit',
        text: 'Last Visit',
        name: 'lastvisit',
        type: 'date'
    }

]
export const clinicalDataFormFields = [
    {
        "id": "id",
        "text": "ID",
        "name": "id",
        "type": "text"
    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text"
    },
    {
        "id": "pat_id",
        "text": "Patient ID",
        "name": "pat_id",
        "type": "text"
    },
    {
        "id": "dm",
        "text": "DM",
        "name": "dm",
        "type": 'select',
        "options": [
            { value: 'Yes', text: 'Yes' },
            { value: 'No', text: 'No' }
        ]
    },
    {
        "id": "htn",
        "text": "HTN",
        "name": "htn",
        "type": 'select',
        "options": [
            { value: 'Yes', text: 'Yes' },
            { value: 'No', text: 'No' }
        ]
    },
    {
        "id": "hcv",
        "text": "HCV",
        "name": "hcv",
        "type": 'select',
        "options": [
            { value: 'Yes', text: 'Yes' },
            { value: 'No', text: 'No' }
        ]
    },
    {
        "id": "hcv_virology",
        "text": "HCV PCR",
        "name": "hcv_virology",
        "type": 'select',
        "options": [
            { value: '+ve', text: 'Postive' },
            { value: '-ve', text: 'Negative' }
        ]
    },
    {
        "id": "hbv",
        "text": "H.B.V",
        "name": "hbv",
        "type": 'select',
        "options": [
            { value: 'Yes', text: 'Yes' },
            { value: 'No', text: 'No' }
        ]
    },
    {
        "id": "hbv_virology",
        "text": "HBV PCR",
        "name": "hbv_virology",
        "type": 'select',
        "options": [
            { value: '+ve', text: 'Postive' },
            { value: '-ve', text: 'Negative' }
        ]
    },
    {
        "id": "hiv",
        "text": "H.I.V",
        "name": "hiv",
        "type": 'select',
        "options": [
            { value: 'Yes', text: 'Yes' },
            { value: 'No', text: 'No' }
        ]
    },
    {
        "id": "hiv_virology",
        "text": "HIV PCR",
        "name": "hiv_virology",
        "type": 'select',
        "options": [
            { value: '+ve', text: 'Postive' },
            { value: '-ve', text: 'Negative' }
        ]
    },
    {
        "id": "child_pugh",
        "text": "Child Pugh",
        "name": "child_pugh",
        "type": 'select',
        "options": [
            { value: 'A', text: 'A' },
            { value: 'B', text: 'B' },
            { value: 'C', text: 'C' }
        ]
    },
    {
        "id": "ckd",
        "text": "C.K.D",
        "name": "ckd",
        "type": 'select',
        "options": [
            { value: 'Yes', text: 'Yes' },
            { value: 'No', text: 'No' }
        ]
    },
    {
        "id": "disability",
        "text": "Disability",
        "name": "disability",
        "type": "text"
    },
    {
        "id": "cardiac",
        "text": "Cardiac",
        "name": "cardiac",
        "type": 'select',
        "options": [
            { value: 'Yes', text: 'Yes' },
            { value: 'No', text: 'No' }
        ]
    }
]
export const cbcFormFields = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text"
    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text"
    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text"
    },
    {
        "id": "date",
        "text": "date",
        "name": "date",
        "type": "date"
    },
    {
        "id": "lab",
        "text": "lab",
        "name": "lab",
        type: 'select',
        options: [
            { value: 'maadi', text: 'Maadi' },
            { value: 'notmaadi', text: 'Outside Maadi' }
        ]
    },
    {
        "id": "hb",
        "text": "hb",
        "name": "hb",
        "type": "number",
        "max": 25,
        "min": 2,
        "step": 0.5,
        "required": false
    },
    {
        "id": "platelets",
        "text": "platelets",
        "name": "platelets",
        "type": "number",
        "max": 1000000,
        "min": 10000,
        "step": 1000,
        "required": false
    },
    {
        "id": "tlc",
        "text": "tlc",
        "name": "tlc",
        "type": "number",
        "max": 1000000,
        "min": 500,
        "step": 500,
        "required": false
    },
    {
        "id": "inr",
        "text": "inr",
        "name": "inr",
        "type": "number",
        "max": 8,
        "min": 0.1,
        "step": 0.1,
        "required": false
    }
]
export const chemisteryFormFields = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text"
    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text"
    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text"
    },
    {
        "id": "date",
        "text": "date",
        "name": "date",
        "type": "date"
    },
    {
        "id": "lab",
        "text": "lab",
        "name": "lab",
        type: 'select',
        options: [
            { value: 'maadi', text: 'Maadi' },
            { value: 'notmaadi', text: 'Outside Maadi' }
        ]
    },
    {
        "id": "ast",
        "text": "ast",
        "name": "ast",
        "type": "number",
        "max": 5000,
        "min": 10,
        "step": 1,
        "required": false
    },
    {
        "id": "alt",
        "text": "alt",
        "name": "alt",
        "type": "number",
        "max": 5000,
        "min": 10,
        "step": 1,
        "required": false
    },
    {
        "id": "bilirubin_total",
        "text": "bilirubin_total",
        "name": "bilirubin_total",
        "type": "number",
        "max": 100,
        "min": 0,
        "step": 0.1,
        "required": false
    },
    {
        "id": "bilirubin_direct",
        "text": "bilirubin_direct",
        "name": "bilirubin_direct",
        "type": "number",
        "max": 100,
        "min": 0,
        "step": 0.1,
        "required": false
    },
    {
        "id": "albumin",
        "text": "albumin",
        "name": "albumin",
        "type": "number",
        "max": 5000,
        "min": 0,
        "step": 0.1,
        "required": false
    },
    {
        "id": "s_creat",
        "text": "s_creat",
        "name": "s_creat",
        "type": "number",
        "max": 100,
        "min": 0,
        "step": 0.1,
        "required": false
    },
    {
        "id": "urea",
        "text": "urea",
        "name": "urea",
        "type": "number",
        "max": 1000,
        "min": 0,
        "step": 0.1,
        "required": false
    },
    {
        "id": "potassium",
        "text": "potassium",
        "name": "potassium",
        "type": "number",
        "max": 20,
        "min": 1,
        "step": 0.1,
        "required": false
    },
    {
        "id": "sodium",
        "text": "sodium",
        "name": "sodium",
        "type": "number",
        "max": 1000,
        "min": 50,
        "step": 1,
        "required": false
    }
]
export const tumorMarkersFormFields = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "date",
        "text": "date",
        "name": "date",
        "type": "date",
        "required": true,

    },
    {
        "id": "lab",
        "text": "lab",
        "name": "lab",
        type: 'select',
        options: [
            {
                value: 'maadi',
                text: 'Maadi'
            },
            {
                value: 'notmaadi',
                text: 'Outside Maadi'
            }
        ]
    },
    {
        "id": "afp",
        "text": "afp",
        "name": "afp",
        "type": "number",

    },
    {
        "id": "cea",
        "text": "cea",
        "name": "cea",
        "type": "number"
    },
    {
        "id": "ca19_9",
        "text": "ca19_9",
        "name": "ca19_9",
        "type": "number"
    },
    {
        "id": "ca_125",
        "text": "ca_125",
        "name": "ca_125",
        "type": "number"
    }
]
export const virologyFormFileds = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "date",
        "text": "date",
        "name": "date",
        "type": "date",
        "required": true,

    },
    {
        "id": "lab",
        "text": "lab",
        "name": "lab",
        type: 'select',
        options: [
            {
                value: 'maadi',
                text: 'Maadi'
            },
            {
                value: 'notmaadi',
                text: 'Outside Maadi'
            }
        ]
    },
    {
        "id": "hcv",
        "text": "hcv",
        "name": "hcv",
        "type": "select",
        "required": false,
        "options": [
            {
                "value": "+ve",
                "text": "Postive"
            },
            {
                "value": "-ve",
                "text": "Negative"
            }
        ]
    },
    {
        "id": "hbv",
        "text": "hbv",
        "name": "hbv",
        "type": "select",
        "required": false,
        "options": [
            {
                "value": "+ve",
                "text": "Postive"
            },
            {
                "value": "-ve",
                "text": "Negative"
            }
        ]
    },
    {
        "id": "hiv",
        "text": "hiv",
        "name": "hiv",
        "type": "select",
        "required": false,
        "options": [
            {
                "value": "+ve",
                "text": "Postive"
            },
            {
                "value": "-ve",
                "text": "Negative"
            }
        ]
    }
]
export const CTFormFields = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text",
        "required": true,
    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text",
        "required": true,
    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text",
        "required": true,
    },
    {
        "id": "date",
        "text": "date",
        "name": "date",
        "type": "date",
        "required": true,

    },
    {
        "id": "center",
        "text": "center",
        "name": "center",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "maadi",
                "text": "Maadi"
            },
            {
                "value": "kobrykoba",
                "text": "Kobry Al Qoba"
            },
            {
                "value": "airforce",
                "text": "Airforce"
            },
            {
                "value": "navy",
                "text": "Navy"
            },
            {
                "value": "others_armedforces",
                "text": "Others - AF"
            },
            {
                "value": "others",
                "text": "Private"
            }
        ]
    },
    {
        "id": "radiologist",
        "text": "radiologist",
        "name": "radiologist",
        "type": "text",
        "required": true,
    },
    {
        "id": "hfl_number",
        "text": "hfl_number",
        "name": "hfl_number",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "solitary",
                "text": "Solitary"
            },
            {
                "value": "multiple_unilobar",
                "text": "Multiple- Unilobar"
            },
            {
                "value": "multiple_bilobar",
                "text": "Multiple-Bilobar"
            }
        ]
    },
    {
        "id": "hfl_lobe",
        "text": "hfl_lobe",
        "name": "hfl_lobe",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "right",
                "text": "Right"
            },
            {
                "value": "left",
                "text": "Left"
            },
            {
                "value": "bilobar",
                "text": "bilobar"
            }
        ]
    },
    {
        "id": "hfl_segment",
        "text": "hfl_segment",
        "name": "hfl_segment",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "1",
                "text": "1"
            },
            {
                "value": "2",
                "text": "2"
            },
            {
                "value": "3",
                "text": "3"
            },
            {
                "value": "4",
                "text": "4"
            },
            {
                "value": "5",
                "text": "5"
            },
            {
                "value": "6",
                "text": "6"
            },
            {
                "value": "7",
                "text": "7"
            },
            {
                "value": "8",
                "text": "8"
            },
        ]
    },
    {
        "id": "size",
        "text": "size",
        "name": "size",
        "type": "number",
    },
    {
        "id": "density",
        "text": "density",
        "name": "density",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "high",
                "text": "High"
            },
            {
                "value": "low",
                "text": "Low"
            },
            {
                "value": "iso",
                "text": "Iso"
            }
        ]
    },
    {
        "id": "aphe",
        "text": "aphe",
        "name": "aphe",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            }
        ]
    },
    {
        "id": "washout",
        "text": "washout",
        "name": "washout",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            }
        ]
    },
    {
        "id": "capsule",
        "text": "capsule",
        "name": "capsule",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            }
        ]
    },
    {
        "id": "growth",
        "text": "growth",
        "name": "growth",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": ">50",
                "text": ">50%"
            },
            {
                "value": "<50%",
                "text": "<50%"
            }
        ]
    },
    {
        "id": "lipidol",
        "text": "lipidol",
        "name": "lipidol",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            }
        ]
    },
    {
        "id": "mpv",
        "text": "mpv",
        "name": "mpv",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "patent",
                "text": "Patent"
            },
            {
                "value": "thrombosed",
                "text": "Thrombosed"
            }
        ]
    },
    {
        "id": "rpv",
        "text": "rpv",
        "name": "rpv",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "patent",
                "text": "Patent"
            },
            {
                "value": "thrombosed",
                "text": "Thrombosed"
            }
        ]
    },
    {
        "id": "lpv",
        "text": "lpv",
        "name": "lpv",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "patent",
                "text": "Patent"
            },
            {
                "value": "thrombosed",
                "text": "Thrombosed"
            }
        ]
    },
    {
        "id": "ascites",
        "text": "ascites",
        "name": "ascites",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "absent",
                "text": "Absent"
            },
            {
                "value": "mild",
                "text": "Mild"
            },
            {
                "value": "moderate",
                "text": "Moderate"
            },
            {
                "value": "severe",
                "text": "Severe"
            }
        ]
    },
    {
        "id": "cirrhosis",
        "text": "cirrhosis",
        "name": "cirrhosis",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            }
        ]
    },
    {
        "id": "ha_origin",
        "text": "ha_origin",
        "name": "ha_origin",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "coeiliac",
                "text": "Coeiliac"
            },
            {
                "value": "SMA",
                "text": "SMA"
            }
        ]
    }
]
export const MRIFormFields = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text",
        "required": true,
    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text",
        "required": true,
    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text",
        "required": true,
    },
    {
        "id": "date",
        "text": "date",
        "name": "date",
        "type": "date",
        "required": true,

    },
    {
        "id": "center",
        "text": "center",
        "name": "center",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "maadi",
                "text": "Maadi"
            },
            {
                "value": "kobrykoba",
                "text": "Kobry Al Qoba"
            },
            {
                "value": "airforce",
                "text": "Airforce"
            },
            {
                "value": "navy",
                "text": "Navy"
            },
            {
                "value": "others_armedforces",
                "text": "Others - AF"
            },
            {
                "value": "others",
                "text": "Private"
            }
        ]
    },
    {
        "id": "radiologist",
        "text": "radiologist",
        "name": "radiologist",
        "type": "text",
        "required": true,
    },
    {
        "id": "hfl_number",
        "text": "hfl_number",
        "name": "hfl_number",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "solitary",
                "text": "Solitary"
            },
            {
                "value": "multiple_unilobar",
                "text": "Multiple- Unilobar"
            },
            {
                "value": "multiple_bilobar",
                "text": "Multiple-Bilobar"
            }
        ]
    },
    {
        "id": "hfl_lobe",
        "text": "hfl_lobe",
        "name": "hfl_lobe",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "right",
                "text": "Right"
            },
            {
                "value": "left",
                "text": "Left"
            },
            {
                "value": "bilobar",
                "text": "bilobar"
            }
        ]
    },
    {
        "id": "hfl_segment",
        "text": "hfl_segment",
        "name": "hfl_segment",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "1",
                "text": "1"
            },
            {
                "value": "2",
                "text": "2"
            },
            {
                "value": "3",
                "text": "3"
            },
            {
                "value": "4",
                "text": "4"
            },
            {
                "value": "5",
                "text": "5"
            },
            {
                "value": "6",
                "text": "6"
            },
            {
                "value": "7",
                "text": "7"
            },
            {
                "value": "8",
                "text": "8"
            },
        ]
    },
    {
        "id": "t1",
        "text": "t1",
        "name": "t1",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "high",
                "text": "High"
            },
            {
                "value": "low",
                "text": "Low"
            },
            {
                "value": "iso",
                "text": "Iso"
            }
        ]
    },
    {
        "id": "t2",
        "text": "t2",
        "name": "t2",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "high",
                "text": "High"
            },
            {
                "value": "low",
                "text": "Low"
            },
            {
                "value": "iso",
                "text": "Iso"
            }
        ]
    },
    {
        "id": "size",
        "text": "size",
        "name": "size",
        "type": "number",
    },
    {
        "id": "aphe",
        "text": "aphe",
        "name": "aphe",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            }
        ]
    },
    {
        "id": "washout",
        "text": "washout",
        "name": "washout",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            }
        ]
    },
    {
        "id": "capsule",
        "text": "capsule",
        "name": "capsule",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            }
        ]
    },
    {
        "id": "growth",
        "text": "growth",
        "name": "growth",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": ">50",
                "text": ">50%"
            },
            {
                "value": "<50%",
                "text": "<50%"
            }
        ]
    },
    {
        "id": "diffusion",
        "text": "diffusion",
        "name": "diffusion",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "restricted",
                "text": "Restriced"
            },
            {
                "value": "free",
                "text": "Free"
            }
        ]
    },
    {
        "id": "mpv",
        "text": "mpv",
        "name": "mpv",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "patent",
                "text": "Patent"
            },
            {
                "value": "thrombosed",
                "text": "Thrombosed"
            }
        ]
    },
    {
        "id": "rpv",
        "text": "rpv",
        "name": "rpv",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "patent",
                "text": "Patent"
            },
            {
                "value": "thrombosed",
                "text": "Thrombosed"
            }
        ]
    },
    {
        "id": "lpv",
        "text": "lpv",
        "name": "lpv",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "patent",
                "text": "Patent"
            },
            {
                "value": "thrombosed",
                "text": "Thrombosed"
            }
        ]
    },
    {
        "id": "ascites",
        "text": "ascites",
        "name": "ascites",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "absent",
                "text": "Absent"
            },
            {
                "value": "mild",
                "text": "Mild"
            },
            {
                "value": "moderate",
                "text": "Moderate"
            },
            {
                "value": "severe",
                "text": "Severe"
            }
        ]
    },
    {
        "id": "cirrhosis",
        "text": "cirrhosis",
        "name": "cirrhosis",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            }
        ]
    },
    {
        "id": "ha_origin",
        "text": "ha_origin",
        "name": "ha_origin",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "coeiliac",
                "text": "Coeiliac"
            },
            {
                "value": "SMA",
                "text": "SMA"
            }
        ]
    }
]
export const ultrasoundFormFiled = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "date",
        "text": "date",
        "name": "date",
        "type": "date",
        "required": true,

    },
    {
        "id": "center",
        "text": "center",
        "name": "center",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "maadi",
                "text": "Maadi"
            },
            {
                "value": "kobrykoba",
                "text": "Kobry Al Qoba"
            },
            {
                "value": "airforce",
                "text": "Airforce"
            },
            {
                "value": "navy",
                "text": "Navy"
            },
            {
                "value": "others_armedforces",
                "text": "Others - AF"
            },
            {
                "value": "others",
                "text": "Private"
            }
        ]
    },
    {
        "id": "radiologist",
        "text": "radiologist",
        "name": "radiologist",
        "type": "text",
        "required": true,

    },
    {
        "id": "hfl_number",
        "text": "hfl_number",
        "name": "hfl_number",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "solitary",
                "text": "Solitary"
            },
            {
                "value": "multiple_unilobar",
                "text": "Multiple- Unilobar"
            },
            {
                "value": "multiple_bilobar",
                "text": "Multiple-Bilobar"
            }
        ]
    },
    {
        "id": "hfl_lobe",
        "text": "hfl_lobe",
        "name": "hfl_lobe",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "right",
                "text": "Right"
            },
            {
                "value": "left",
                "text": "Left"
            },
            {
                "value": "bilobar",
                "text": "bilobar"
            }
        ]
    },
    {
        "id": "hfl_segment",
        "text": "hfl_segment",
        "name": "hfl_segment",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "1",
                "text": "1"
            },
            {
                "value": "2",
                "text": "2"
            },
            {
                "value": "3",
                "text": "3"
            },
            {
                "value": "4",
                "text": "4"
            },
            {
                "value": "5",
                "text": "5"
            },
            {
                "value": "6",
                "text": "6"
            },
            {
                "value": "7",
                "text": "7"
            },
            {
                "value": "8",
                "text": "8"
            },
        ]
    },
    {
        "id": "echogenicity",
        "text": "echogenicity",
        "name": "echogenicity",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "high",
                "text": "High"
            },
            {
                "value": "low",
                "text": "Low"
            },
            {
                "value": "iso",
                "text": "Iso"
            }
        ]
    },
    {
        "id": "mpv",
        "text": "mpv",
        "name": "mpv",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "patent",
                "text": "Patent"
            },
            {
                "value": "thrombosed",
                "text": "Thrombosed"
            }
        ]
    },
    {
        "id": "rpv",
        "text": "rpv",
        "name": "rpv",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "patent",
                "text": "Patent"
            },
            {
                "value": "thrombosed",
                "text": "Thrombosed"
            }
        ]
    },
    {
        "id": "lpv",
        "text": "lpv",
        "name": "lpv",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "patent",
                "text": "Patent"
            },
            {
                "value": "thrombosed",
                "text": "Thrombosed"
            }
        ]
    },
    {
        "id": "ascites",
        "text": "ascites",
        "name": "ascites",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "absent",
                "text": "Absent"
            },
            {
                "value": "mild",
                "text": "Mild"
            },
            {
                "value": "moderate",
                "text": "Moderate"
            },
            {
                "value": "severe",
                "text": "Severe"
            }
        ]
    },
    {
        "id": "cirrhosis",
        "text": "cirrhosis",
        "name": "cirrhosis",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            }
        ]
    },
]
export const patientPlanFormFields = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "date",
        "text": "date",
        "name": "date",
        "type": "date",
        "required": true,

    },
    {
        "id": "radiologist",
        "text": "radiologist",
        "name": "radiologist",
        "type": "text",
        "required": true,
    },
    {
        "id": "plan_setting",
        "text": "plan_setting",
        "name": "plan_setting",
        "type": "select",
        "required": false,
        "options": [
            {
                "value": "InPatient",
                "text": "In patient"
            },
            {
                "value": "OutPatient",
                "text": "Out patient"
            }
        ]
    },
    {
        "id": "decision",
        "text": "decision",
        "name": "decision",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "fit",
                "text": "Fit"
            },
            {
                "value": "pending",
                "text": "Pending"
            },
            {
                "value": "refer",
                "text": "Refer"
            },
            {
                "value": "TACE",
                "text": "TACE"
            },
            {
                "value": "RFA",
                "text": "RFA"
            }
        ]
    },
    {
        "id": "further",
        "text": "further",
        "name": "further",
        "type": "text",

    },
    {
        "id": "remarks",
        "text": "remarks",
        "name": "remarks",
        "type": "text",
    },
    {
        "id": "next_visit",
        "text": "Next Visit",
        "name": "next_visit",
        "type": "date",
        "required": false,
    }
]
export const resectionFormFields = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "date",
        "text": "date",
        "name": "date",
        "type": "date",
        "required": true,

    },
    {
        "id": "center",
        "text": "center",
        "name": "center",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "maadi",
                "text": "Maadi"
            },
            {
                "value": "other",
                "text": "Outside Maadi"
            }
        ]
    },
    {
        "id": "surgeon",
        "text": "surgeon",
        "name": "surgeon",
        "type": "text",
        "required": false,

    },
    {
        "id": "complications",
        "text": "complications",
        "name": "complications",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            },
            {
                "value": "na",
                "text": "NA"
            },
        ]
    },
    {
        "id": "outcome",
        "text": "outcome",
        "name": "outcome",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "success",
                "text": "Succussful"
            },
            {
                "value": "failed",
                "text": "Recurrence"
            }
        ]
    },
    {
        "id": "transplant",
        "text": "transplant",
        "name": "transplant",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "yes",
                "text": "Yes"
            },
            {
                "value": "no",
                "text": "No"
            }
        ]
    },
    {
        "id": "remarks",
        "text": "remarks",
        "name": "remarks",
        "type": "text",
        "required": false,
    }
]
export const TACEFormFields = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "date",
        "text": "date",
        "name": "date",
        "type": "date",
        "required": true,

    },
    {
        "id": "center",
        "text": "center",
        "name": "center",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "maadi",
                "text": "Maadi"
            },
            {
                "value": "kobrykoba",
                "text": "Kobry Al Qoba"
            },
            {
                "value": "airforce",
                "text": "Airforce"
            },
            {
                "value": "mustafakamel",
                "text": "Mustafa Kamel"
            },
            {
                "value": "others",
                "text": "Private"
            }
        ]
    },
    {
        "id": "radiologist",
        "text": "radiologist",
        "name": "radiologist",
        "type": "text",
        "required": true,

    },
    {
        "id": "catheter",
        "text": "catheter",
        "name": "catheter",
        "type": "select",
        "required": false,
        "options": [
            {
                "value": "cobra",
                "text": "Cobra"
            },
            {
                "value": "simon",
                "text": "Simon"
            },
            {
                "value": "simon_micro",
                "text": "Simon & Micro"
            },
            {
                "value": "cobra_micro",
                "text": "Cobra & Micro"
            }
        ]
    },
    {
        "id": "ha_origin",
        "text": "ha_origin",
        "name": "ha_origin",
        "type": "select",
        "required": false,
        "options": [
            {
                "value": "coeiliac",
                "text": "Coeiliac"
            },
            {
                "value": "SMA",
                "text": "SMA"
            },
            {
                "value": "phrenic",
                "text": "Phrenic"
            },
            {
                "value": "others",
                "text": "Other"
            }
        ]
    },
    {
        "id": "parent_feeding_artery",
        "text": "parent_feeding_artery",
        "name": "parent_feeding_artery",
        "type": "select",
        "required": false,
        "options": [
            {
                "value": "RHA",
                "text": "RHA"
            },
            {
                "value": "LHA",
                "text": "LHA"
            },
            {
                "value": "segment4",
                "text": "Segment 4 artery"
            }
        ]
    },
    {
        "id": "complications",
        "text": "complications",
        "name": "complications",
        "type": "text",
        "required": false,

    },
    {
        "id": "outcome",
        "text": "outcome",
        "name": "outcome",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "well_embolization",
                "text": "Well embolization"
            },
            {
                "value": "partial_embolization",
                "text": "Partial embolization"
            },
            {
                "value": "failed",
                "text": "Failed embolization"
            }
        ]
    },
    {
        "id": "remarks",
        "text": "remarks",
        "name": "remarks",
        "type": "text",
        "required": false,

    }
]
export const RFAFormFields = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text",
        "required": true,

    },
    {
        "id": "date",
        "text": "date",
        "name": "date",
        "type": "date",
        "required": true,

    },
    {
        "id": "center",
        "text": "center",
        "name": "center",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "maadi",
                "text": "Maadi"
            },
            {
                "value": "kobrykoba",
                "text": "Kobry Al Qoba"
            },
            {
                "value": "airforce",
                "text": "Airforce"
            },
            {
                "value": "mustafakamel",
                "text": "Mustafa Kamel"
            },
            {
                "value": "others",
                "text": "Private"
            }
        ]
    },
    {
        "id": "radiologist",
        "text": "radiologist",
        "name": "radiologist",
        "type": "text",
        "required": true,

    },
    {
        "id": "needle",
        "text": "needle",
        "name": "needle",
        "type": "select",
        "required": false,
        "options": [
            {
                "value": "rf",
                "text": "Radiofrequency"
            },
            {
                "value": "microwave",
                "text": "Microwave"
            }
        ]
    },
    {
        "id": "complications",
        "text": "complications",
        "name": "complications",
        "type": "text",
        "required": false,

    },
    {
        "id": "outcome",
        "text": "outcome",
        "name": "outcome",
        "type": "select",
        "required": true,
        "options": [
            {
                "value": "well_ablation",
                "text": "Well ablation"
            },
            {
                "value": "partial_ablation",
                "text": "Partial ablation"
            },
            {
                "value": "failed",
                "text": "Failed ablation"
            }
        ]
    },
    {
        "id": "remarks",
        "text": "remarks",
        "name": "remarks",
        "type": "text",
        "required": false,

    }
]

/******* */

// No form needed for patient visits
export const patientVisitsFormFileds = [
    {
        "id": "id",
        "text": "id",
        "name": "id",
        "type": "text",
        "required": true,
        "options": [
            {
                "value": "1",
                "text": "1"
            },
            {
                "value": "2",
                "text": "2"
            }
        ]
    },
    {
        "id": "pat_nat_id",
        "text": "pat_nat_id",
        "name": "pat_nat_id",
        "type": "text",
        "required": true,
        "options": [
            {
                "value": "1",
                "text": "1"
            },
            {
                "value": "2",
                "text": "2"
            }
        ]
    },
    {
        "id": "pat_id",
        "text": "pat_id",
        "name": "pat_id",
        "type": "text",
        "required": true,
        "options": [
            {
                "value": "1",
                "text": "1"
            },
            {
                "value": "2",
                "text": "2"
            }
        ]
    },
    {
        "id": "clinic_id",
        "text": "clinic_id",
        "name": "clinic_id",
        "type": "text",
        "required": true,
        "options": [
            {
                "value": "1",
                "text": "1"
            },
            {
                "value": "2",
                "text": "2"
            }
        ]
    }
]


export const navbarPatientButtons = [
    {
        id: 'patients_personal',
        url: 'personaldata',
        text: 'Personal Data',
        imgText: 'contact_mail'
    },
    {
        id: 'clinical_data',
        url: 'clinicaldata',
        text: 'Clinical Data',
        imgText: 'medical_information'
    },
    {
        id: 'cbc',
        url: 'cbc',
        text: 'CBC',
        imgText: 'biotech'
    },
    {
        id: 'chemistry',
        url: 'chemistry',
        text: 'Chemistry',
        imgText: 'biotech'
    },
    {
        id: 'tumor_markers',
        url: 'tumormarkers',
        text: 'Tumor Markers',
        imgText: 'biotech'
    },
    {
        id: 'virology',
        url: 'virology',
        text: 'Virology',
        imgText: 'biotech'
    },
    {
        id: 'ct',
        url: 'ct',
        text: 'CT',
        imgText: 'skeleton'
    },
    {
        id: 'mri',
        url: 'mri',
        text: 'MRI',
        imgText: 'skeleton'

    },
    {
        id: 'ultrasound',
        url: 'us',
        text: 'Ultrasound',
        imgText: 'skeleton'
    },
    {
        id: 'patient_plan',
        url: 'patientplan',
        text: 'Patient Plan',
        imgText: 'fork_left'
    },
    {
        id: 'resection',
        url: 'resection',
        text: 'Resection',
        imgText: 'medical_services'
    },
    {
        id: 'tace',
        url: 'tace',
        text: 'TACE',
        imgText: 'medical_services'
    },
    {
        id: 'rfa',
        url: 'rfa',
        text: 'RFA',
        imgText: 'medical_services'
    },
]




// use to correct text
export const correctTitles = (text) => {
    let textToDisplay = text;
    for (const i in clinicDictionary) {
        if (text === i) {
            textToDisplay = clinicDictionary[i]
        }
    }
    return textToDisplay
}


// use in any console to convert keys into form object
export function convertKeysToFormObject(formKeys) {
    const formObject = formKeys.map((key) => {
        return ({
            id: key,
            text: key,
            name: key,
            type: 'text',
            required: true,
            options: [
                { value: '1', text: '1' },
                { value: '2', text: '2' },
            ]

        })
    })
    return formObject;
} 