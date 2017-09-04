%.zip: %
	git archive HEAD $< --output $@
