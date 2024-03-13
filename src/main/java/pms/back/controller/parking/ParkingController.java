package pms.back.controller.parking;

import pms.back.abstracts.BaseController;
import pms.back.dtos.parking.ParkingDTO;
import pms.back.service.parking.ParkingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/parking")
public class ParkingController extends BaseController {
    private ParkingService parkingService;

    public ParkingController(ParkingService parkingService) {this.parkingService = parkingService;}

    @PostMapping("/add")
    public ResponseEntity<?> create(@RequestBody ParkingDTO parkingDTO) throws IOException {
        parkingDTO = parkingService.create(parkingDTO);
        return ResponseEntity.ok(
                successResponse(customMessageSource.get(
                        "crud.create", customMessageSource.get("parking")),parkingDTO)
        );
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        List<ParkingDTO> dtos = parkingService.getAll();
        return ResponseEntity.ok(
                successResponse(customMessageSource.get(
                        "crud.get.all", customMessageSource.get("parking")),dtos)
        );
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Integer id){
        ParkingDTO dto = parkingService.getById(id);
        return ResponseEntity.ok(
                successResponse(customMessageSource.get(
                        "crud.get", customMessageSource.get("parking")),dto)
        );
    }

    @PutMapping
    public ResponseEntity<?> update(@RequestBody ParkingDTO dto) throws IOException {
        dto = parkingService.update(dto);
        return ResponseEntity.ok(
                successResponse(customMessageSource.get(
                        "crud.update", customMessageSource.get("parking")),dto)
        );
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Integer id){
        parkingService.deleteById(id);
        return ResponseEntity.ok(
                successResponse(customMessageSource.get(
                        "crud.delete", customMessageSource.get("parking")),null)
        );
    }
}