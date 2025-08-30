package org.example.back;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // React app URL
public class PortfolioController {

    @GetMapping("/download/cv")
    public ResponseEntity<Resource> downloadCV() {
        Path path = Paths.get("C:/Users/HP/my-portfolio/back/files/YourName_CV.pdf");
        Resource resource = new FileSystemResource(path.toFile());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=YourName_CV.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(resource);
    }

    @GetMapping("/reports/{reportName}")
    public ResponseEntity<Resource> getProjectReport(@PathVariable String reportName) {
        Path path = Paths.get("C:/Users/HP/my-portfolio/back/files/reports/" + reportName);
        Resource resource = new FileSystemResource(path.toFile());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=" + reportName)
                .contentType(MediaType.APPLICATION_PDF)
                .body(resource);
    }
}
