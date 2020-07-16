"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

@Injectable({
 providedIn: "root"
})
export class UsuarioServico {

 private baseURL: string;
 constructor(private http: HttpClient, @Inject('BASE URL') baseUrl: string) {
   this.baseURL = baseUrl;
 }


public verificarUsuario(usuario: Usuario): Observable<Usuario>{

   const headers = new HttpHeaders().set('content-type', 'application/json');

   var body = {
     email: usuario.email,
     senha: usuario.senha
   }

   //this.basURL = raiz do site que pode ser exemplo: http://www.quickbuy.com
   return this.http.post<Usuario>(this.baseURL, body, { headers });
   //+ "api/usuario"
 }
}
*/
//# sourceMappingURL=usuario.servico.js.map