using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Entidades;
using System;

namespace QuickBuy.Web.Controllers
{
   [Route("api/[Controller]")]
    public class UsuarioController : Controller 
    {

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("VerificarUsuario")]
        public ActionResult VerificarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                if(usuario.Email == "mau@teste.com" && usuario.Senha == "abc123")
                    return Ok(usuario);//retorna o OK e o Usuário convertido de volta para o json
                
                return BadRequest("Usuário ou senha inválida");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }


        [HttpPost]
        public ActionResult Post()
        {
            try
            {
                return Ok();
            }catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
