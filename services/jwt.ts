import jwt from "jsonwebtoken";

type payload = {
  id: string;
};

export function generateToken(data: payload) {
  const token = jwt.sign(data, process.env.JWT_SECRET as string,{
    expiresIn:"7d"
  });
  return token;
}

export function verifyToken(token: string) {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET as string);
    return data as payload;
  } catch (error) {
    return null;
  }
}
