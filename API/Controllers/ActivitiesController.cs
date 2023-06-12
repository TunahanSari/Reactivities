using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Application.Activities;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly IMediator _mediator;
        public ActivitiesController(IMediator mediator)
        {
            _mediator = mediator;

        }

        [HttpGet]           // /api/GetActivities
        public async Task<IActionResult> GetActivities()
        {
            return HandleResult(await _mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]   // /api/GetActivity/{id}
        public async Task<IActionResult> GetActivity(Guid id)
        {
            return HandleResult(await _mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]           // /api/CreateActivity
        public async Task<IActionResult> CreateActivity(Activity activity) {
            return HandleResult(await Mediator.Send(new Create.Command{Activity = activity}));
        }
        
        [HttpPut("{id}")]           // /api/CreateActivity
        public async Task<IActionResult> EditActivity(Guid id, Activity activity) {
            activity.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Activity = activity}));
        }

        
        [HttpDelete("{id}")]           // /api/CreateActivity
        public async Task<IActionResult> DeleteActivity(Guid id) {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}