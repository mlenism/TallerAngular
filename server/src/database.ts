import { Pool } from 'pg';

export const pool = new Pool({
    host: 'ec2-54-164-134-207.compute-1.amazonaws.com',
    user: 'psfdpnpmafbozm',
    password: '139a536159b0fbffed091970603d4740f1fdbe3f735872eb77f6855c3b14b093',
    database: 'd2gkepj777fvip',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});