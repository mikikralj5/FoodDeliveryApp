using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FoodDeliveryAPI.DTOs;
using FoodDeliveryAPI.DTOs.Product;
using FoodDeliveryAPI.DTOs.User;
using FoodDeliveryAPI.Helpers;
using FoodDeliveryAPI.Models;
using FoodDeliveryAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FoodDeliveryAPI.Controllers
{
    [Route("api/Admin")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        private readonly IMapper _mapper;

       
        private readonly IProductRepository _productRepository;

        public AdminController(IUserRepository userRepository, IProductRepository productRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;          
            _productRepository = productRepository;
        }

        [HttpPost("VerifyUser")]
        public IActionResult VerifyUser([FromBody] UserIdDto userIdDto)
        {
            _userRepository.VerifyUser(userIdDto.Username);

            return Ok("verifikovan");
        }

        [HttpGet("GetUnverifiedDeliverers")]
        public IActionResult GetUnverifiedDeliverers()
        {
            return Ok(_mapper.Map<List<UserProfileDto>>(_userRepository.GetUnverifiedDeliverers()));
        }

        [HttpGet("GetVerifiedDeliverers")]
        public IActionResult GetVerifiedDeliverers()
        {
            return Ok(_mapper.Map<List<UserProfileDto>>(_userRepository.GetVerifiedDeliverers()));
        }


        [HttpPost("AddProduct")]
        public IActionResult AddProduct([FromBody] ProductDto productDto)
        {
            Product product = _mapper.Map<Product>(productDto);

            _productRepository.AddProduct(product);

          
            return Ok("proizvod dodat");
        }

      


    }
}
