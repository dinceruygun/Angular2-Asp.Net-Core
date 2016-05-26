using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Threading;

namespace aspcore.Controllers
{
    public class products {
        public List<Product> Products = new List<Product>();
    }

    public class Product
    {
        public string value { get; set; }
        public int price { get; set; }
    }

    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public products Get()
        {
            Random rnd = new Random();
            int count = rnd.Next(1, 20);

            products products = new products();

            for (int i = 0; i < count; i++)
            {
                products.Products.Add(new Product { value = $"product {i.ToString()}", price = i });
            }

            Thread.Sleep((int)TimeSpan.FromSeconds(1).TotalMilliseconds);

            return products;
        }



        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
