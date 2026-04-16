#!/usr/bin/env python3
"""
Substack PDF text extractor for pmOS scheduled monitor.
Usage:  python3 substack-extractor.py "/path/to/file.pdf"
Stdout: extracted plain text
Stderr: fatal errors only (warnings suppressed)
Exit:   0 = success, 1 = fatal error, 2 = empty extraction
"""
import sys
import os
import warnings


def extract_pdf(pdf_path):
    try:
        import pdfplumber
    except ImportError:
        print("ERROR: pdfplumber not installed. Run: pip3 install pdfplumber", file=sys.stderr)
        sys.exit(1)

    if not os.path.exists(pdf_path):
        print(f"ERROR: File not found: {pdf_path}", file=sys.stderr)
        sys.exit(1)

    chunks = []
    try:
        with warnings.catch_warnings():
            warnings.simplefilter("ignore")
            with pdfplumber.open(pdf_path) as pdf:
                for page in pdf.pages:
                    try:
                        text = page.extract_text()
                        if text and text.strip():
                            chunks.append(text.strip())
                    except Exception:
                        pass  # skip unreadable pages silently
    except Exception as e:
        print(f"ERROR: Could not open PDF: {e}", file=sys.stderr)
        sys.exit(1)

    if not chunks:
        print("ERROR: No text could be extracted from this PDF", file=sys.stderr)
        sys.exit(2)

    print("\n\n".join(chunks))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 substack-extractor.py <pdf_path>", file=sys.stderr)
        sys.exit(1)
    extract_pdf(sys.argv[1])
