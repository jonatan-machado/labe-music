import * as bcrypt from 'bcryptjs';

class HashManager {
  async hash(text: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(text, salt);
  }

  async compare(text: string, cypherText: string) {
    return bcrypt.compare(text, cypherText);
  }
}

export default HashManager;
