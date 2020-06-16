package dev.codesquad.issuetracker.web.controller;

import dev.codesquad.issuetracker.service.IssueService;
import dev.codesquad.issuetracker.web.dto.ResultResponse;
import dev.codesquad.issuetracker.web.dto.issue.IssueRequest;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;

    @GetMapping("/issues")
    public ResponseEntity<ResultResponse> viewIssues() {
        return new ResponseEntity(issueService.viewAll(), HttpStatus.OK);
    }

    /**
     *
     * assignee & label을 지정하지 않으면 empty array
     * milestone을 지정하지 않으면 -1
     */
    @PostMapping("/issues")
    public ResponseEntity createIssue(@RequestBody @Valid IssueRequest issueRequest) {
        return new ResponseEntity(issueService.create(issueRequest), HttpStatus.OK);
    }
}
