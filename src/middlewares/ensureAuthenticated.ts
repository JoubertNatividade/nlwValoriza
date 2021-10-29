import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}


export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {

  const authToken = request.headers.authorization;

  // Validar se o token ta preenchido
  if(!authToken) {
    return response.status(401).end();
  }

  // Desmenrbando o token
  const [, token ] = authToken.split(" ");

  try{
    // Pegando as informações do usuario
    const { sub }  = verify(token, 'b9516d04701ac7dc45696cab17870313') as IPayload;

    request.user_id = sub;


    return next();

  }catch(err){
    return response.status(401).end();
  }



}
