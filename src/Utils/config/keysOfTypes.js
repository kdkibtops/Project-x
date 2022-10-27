export const PATIENTS_PERSONAL = [
    'id',
    'firstname',
    'middlename',
    'lastname',
    'hospital_id',
    'pat_nat_id',
    'mobile',
    'dob',
    'residence',
    'gender',
    'rank',
    'firstvisit',
    'lastvisit'
]
export const CLINICAL_DATA = [
    'id',
    'pat_nat_id',
    'pat_id',
    'dm',
    'htn',
    'hcv',
    'hbv',
    'hiv',
    'child_pugh',
    'hcv_virology',
    'hbv_virology',
    'hiv_virology',
    'ckd',
    'disability',
    'cardiac'
]
export const CBC = [
    'id',
    'pat_nat_id',
    'pat_id',
    'date',
    'lab',
    'hb',
    'platelets',
    'tlc',
    'inr'
]
export const CHEMISTRY = [
    'id',
    'pat_nat_id',
    'pat_id',
    'date',
    'lab',
    'ast',
    'alt',
    'bilirubin_total',
    'bilirubin_direct',
    'albumin',
    's_creat',
    'urea',
    'potassium',
    'sodium'
]
export const CLINICS = [
    'id',
    'date',
    'attending_phys'
]
export const CT = [
    'id',
    'pat_nat_id',
    'pat_id',
    'date',
    'center',
    'radiologist',
    'hfl_number',
    'hfl_lobe',
    'hfl_segment',
    'density',
    'size',
    'aphe',
    'washout',
    'capsule',
    'growth',
    'lipidol',
    'mpv',
    'rpv',
    'lpv',
    'ascites',
    'cirrhosis',
    'ha_origin',
]
export const MRI = [
    'id',
    'pat_nat_id',
    'pat_id',
    'date',
    'center',
    'radiologist',
    'hfl_number',
    'hfl_lobe',
    'hfl_segment',
    't1',
    't2',
    'size',
    'aphe',
    'washout',
    'capsule',
    'growth',
    'diffusion',
    'mpv',
    'rpv',
    'lpv',
    'ascites',
    'cirrhosis',
    'ha_origin'
]
export const PATIENT_PLAN = [
    'id',
    'pat_nat_id',
    'pat_id',
    'date',
    'radiologist',
    'plan_setting',
    'decision',
    'further',
    'remarks'
]
export const RESECTION = [
    'id',
    'pat_nat_id',
    'pat_id',
    'date',
    'center',
    'surgeon',
    'complications',
    'outcome',
    'transplant',
    'remarks'
]
export const RFA = [
    'id',
    'pat_nat_id',
    'pat_id',
    'date',
    'center',
    'radiologist',
    'needle',
    'complications',
    'outcome',
    'remarks'
]
export const TACE = [
    'id',
    'pat_nat_id',
    'pat_id',
    'date',
    'center',
    'radiologist',
    'catheter',
    'ha_origin',
    'parent_feeding_artery',
    'complications',
    'outcome',
    'remarks'
]
export const TUMOR_MARKERS = [
    'id',
    'pat_nat_id',
    'pat_id',
    'date',
    'lab',
    'afp',
    'cea',
    'ca19_9',
    'ca_125'
]
export const ULTRASOUND = [
    'id',
    'pat_nat_id',
    'pat_id',
    'date',
    'center',
    'radiologist',
    'hfl_number',
    'hfl_lobe',
    'echogenicity',
    'hfl_segment',
    'mpv',
    'rpv',
    'lpv',
    'ascites',
    'cirrhosis'
]
export const USERS = [
    'id',
    'username',
    'fullname',
    'degree',
    'role',
    'email',
    'password'
]
export const VIROLOGY = [
    'id',
    'pat_nat_id',
    'pat_id',
    'date',
    'lab',
    'hcv',
    'hbv',
    'hiv'
]
export const USERS_LOGIN = [
    'id',
    'username',
    'login_time',
    'refresh_jwt'
]
export const PATIENTS_VISITS = [
    'id',
    'pat_nat_id',
    'pat_id',
    'clinic_id'
]
export const REQDATAFILTER = [
    'column',
    'value',
    'table_name',
    'columnsNeeded[]',
    'orderBy',
    'clinicID'
]
export const REQDATAUSER = [
    'req_username',
    'username',
    'req_JWT',
    'password',
]
export const REQBODY = [
    'data'
]
export const REQBODYDATA = [
    'filter',
    'user',
    'body',
    'SQL: SQLquery'
]
export const REQBODYDATABODY = [
    'cbc',
    'mri',
    'patient_plan',
    'patients_personal',
    'patients_visits',
    'resection',
    'rfa',
    'tace',
    'tumor_markers',
    'ultrasound',
    'users_login',
    'chemistry',
    'clinical_data',
    'clinics',
    'ct',
    'virology',
    'users',
    'updating_user',
]
export const PATIENTS_SUMMARY_TABLES = [
    'patients_personal',
    'patient_plan',
    'clinical_data',
    'patients_visits',
    'chemistry',
    'cbc',
    'tumor_markers',
    'virology',
    'ultrasound',
    'ct',
    'mri',
    'resection',
    'rfa',
    'tace',
    'clinics',
]

export const SQLquery = [
    'mainTable',
    'joinTable1',
    'joinTable2',
    'joinTable3',
    'joinTable4',
    'joinTable5',
    'joinTable6',
    'onTable1Column',
    'onTable2Column',
    'onTable3Column',
    'onTable4Column',
    'onTable5Column',
    'onTable6Column',
    'equalTable1Column',
    'equalTable2Column',
    'equalTable3Column',
    'equalTable4Column',
    'equalTable5Column',
    'equalTable6Column',
]
export const UPDATING_USER = [
    'updateField',
    'updateValue',
    'username'
]

export const DOB_AGE_GENDER = [
    'DOB',
    'GENDER',
    'AGE'
]

export const newProxyServerClient = [
    'name',
    'status',
]

export const HTMLReq = [
    'method',
    'toDo',
    'body'
]


